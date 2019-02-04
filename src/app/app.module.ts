import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { MomentModule } from 'ngx-moment';
import { CustomDateTime } from './pipes/custom-date.pipe';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		ProfileComponent,
		TimeAgoPipe,
		CustomDateTime
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		MomentModule
	],
	exports: [SharedModule],
	providers: [CustomDateTime],
	bootstrap: [AppComponent]
})
export class AppModule { }
