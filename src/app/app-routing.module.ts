import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RealTimeComponent } from './components/real-time/real-time.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
