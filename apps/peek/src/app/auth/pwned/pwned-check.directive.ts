import { HttpClient } from '@angular/common/http'
import { Directive, HostListener, OnDestroy } from '@angular/core'
import { sha1 } from '@peek/util/format'
import { filter, map, switchMap, takeUntil } from 'rxjs/operators'
import { Observable, Subject, timer } from 'rxjs'
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms'

@Directive({
  selector: '[peekPwnedCheck]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: PwnedCheckDirective,
      multi: true,
    },
  ],
})
export class PwnedCheckDirective implements AsyncValidator, OnDestroy {
  private _destroy = new Subject<void>()
  private _autofilled = false
  constructor(private _http: HttpClient) {}

  @HostListener('cdkAutofill', ['$event'])
  onAutofill($event: Event) {
    this._autofilled = true
  }

  validate({ value }: AbstractControl): Observable<ValidationErrors> {
    // Wait for tab animation
    return timer(1200).pipe(
      takeUntil(this._destroy),
      switchMap(() => {
        const v = sha1(value)
        const hash = v.slice(0, 5)
        type PwnedResponse = {
          passhash: string
          records: number
        }

        const founded = ({ passhash }: PwnedResponse) =>
          v.toUpperCase() === hash.toUpperCase() + passhash

        return this._http
          .post<PwnedResponse[]>('/auth/check', { hash })
          .pipe(
            map((response = []) => response.find(founded)),
            map((pwned) => (pwned ? { pwned: pwned.records } : null))
          )
      })
    )
  }
  ngOnDestroy(): void {
    this._destroy.next()
    this._destroy.complete()
  }
}
