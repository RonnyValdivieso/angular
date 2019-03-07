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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaginatorModule } from "primeng/paginator";
import { DataTableModule } from 'primeng/datatable';
import { RealTimeComponent } from './components/real-time/real-time.component';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TabsComponent } from './components/tabs/tabs.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		ProfileComponent,
		TimeAgoPipe,
		CustomDateTime,
		PaginationComponent,
		RealTimeComponent,
		TabsComponent
		LoginComponent,
		PageNotFoundComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		MomentModule,
		NgxPaginationModule,
		PaginatorModule,
		DataTableModule,
		NgbModule
	],
	exports: [SharedModule],
	providers: [
		CustomDateTime,
		LeadService,
		{
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
