import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { RoomComponent } from './room/room.component'
import { One2oneComponent } from './one2one/one2one.component'
import { microNegotiateRoutes } from '@peek/micro/negotiate'

@NgModule({
  imports: [
    RouterModule.forRoot(
      microNegotiateRoutes,
      // [
      //   { path: '', pathMatch: 'full', redirectTo: 'home' },
      //   { path: 'home', component: HomeComponent },
      //   { path: 'one2one', component: One2oneComponent },
      //   { path: 'room/:code', component: RoomComponent },
      //   ...microUpgradeRoutes,
      // ],
      {
        useHash: true,
        initialNavigation: 'enabled',
        relativeLinkResolution: 'legacy',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
