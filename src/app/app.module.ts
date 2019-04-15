import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MomentModule } from 'ngx-moment';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LeadService } from './services/lead/lead.service';
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaginatorModule } from "primeng/paginator";
import { DataTableModule } from 'primeng/datatable';
import { RealTimeComponent } from './components/real-time/real-time.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TabsComponent } from './components/tabs/tabs.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TokenInterceptor } from './token.interceptor';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { AuthService } from './services/auth/auth.service';
import { SocketService } from './services/socket.service';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		ProfileComponent,
		PaginationComponent,
		RealTimeComponent,
		TabsComponent,
		LoginComponent,
		PageNotFoundComponent,
		TooltipComponent
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
		LeadService,
    {
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		},
		AuthService,
		SocketService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
