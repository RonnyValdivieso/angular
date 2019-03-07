import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/guards/auth-guard.service';
 
@NgModule({
 imports:      [ CommonModule ],
 declarations: [],
 exports:      [CommonModule, FormsModule, AuthGuard ],
 providers: [ AuthGuard ]
})
export class DashboardModule { }