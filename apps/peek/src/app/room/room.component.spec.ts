import { ComponentFixture, TestBed } from '@angular/core/testing'
import { env } from '../../envs/env'
import { RoomComponent } from './room.component'
import { Signaling, Media } from '@peek/core/model'
import {
  CorePeekModule,
  PeekMaterialModule,
  SignalingFactory,
  SIGNALING_CLIENT,
  MediaFactory,
  MEDIA_CONSTRAINTS,
} from '@peek/core/peek'

const media = {
  getUserMedia: jest.fn().mockImplementation((query) => {
    return new Promise((resolve, reject) => {
      return {
        getTracks: jest.fn(),
      }
    })
  }),
  getDevices: jest.fn(),
  getDisplayMedia: jest.fn(),
}

describe('RoomComponent', () => {
  let component: RoomComponent
  let fixture: ComponentFixture<RoomComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorePeekModule, PeekMaterialModule],
      providers: [
        {
          provide: SIGNALING_CLIENT,
          useValue: env.seek,
        },
        {
          provide: Signaling,
          useFactory: SignalingFactory,
          deps: [SIGNALING_CLIENT],
        },
        {
          provide: MEDIA_CONSTRAINTS,
          useValue: env.constraints,
        },
        {
          provide: Media,
          useFactory: MediaFactory,
          deps: [MEDIA_CONSTRAINTS],
        },
        {
          provide: Media,
          useValue: media,
        },
      ],
      declarations: [RoomComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should self video be muted, but no remote', async () => {
    spyOn(component, 'active$')
    component.active$.toPromise().then(() => {
      expect(component.active.next).toBeCalled()
      expect(component.selfView.muted).toBeTruthy()
      expect(component.remoteView.muted).toBeFalsy()
    })
  })
})