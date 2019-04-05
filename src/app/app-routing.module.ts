import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RealTimeComponent } from './components/real-time/real-time.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth-guard.service';
import { TooltipComponent } from './components/tooltip/tooltip.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'pagination',
    component: PaginationComponent
  },
  {
    path: 'real-time',
    component: RealTimeComponent
  },
  {
    path: 'tabset',
    component: TabsComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
