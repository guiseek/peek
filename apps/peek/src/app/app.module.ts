import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule } from '@angular/material/sidenav'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { RoomComponent } from './room/room.component'
import { HomeComponent } from './home/home.component'
import { PeekMaterialModule, CorePeekModule } from '@peek/core/peek'
import { Signaling, Media } from '@peek/core/model'
import {
  MediaFactory,
  MEDIA_CONSTRAINTS,
  SignalingFactory,
  SIGNALING_CLIENT,
} from '@peek/core/peek'
import { Room } from './room/room'
import { env } from '../envs/env'

@NgModule({
  declarations: [AppComponent, Room, RoomComponent, HomeComponent],
  imports: [
    CorePeekModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    PeekMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
