import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile.component';

@NgModule({
declarations: [ProfileComponent],
imports: [SharedModule],
providers: [],
exports: [SharedModule]
})
export class ProfileModule { }