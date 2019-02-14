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
import { PaginationComponent } from './components/pagination/pagination.component';
import { LeadService } from './services/lead/lead.service';
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from "primeng/paginator";
import { DataTableModule } from 'primeng/datatable';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		ProfileComponent,
		TimeAgoPipe,
		CustomDateTime,
		PaginationComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		MomentModule,
		NgxPaginationModule,
		PaginatorModule,
		DataTableModule
	],
	exports: [SharedModule],
	providers: [
		CustomDateTime,
		LeadService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
