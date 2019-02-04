import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FrameworksComponent } from './frameworks.component';

@NgModule({
declarations: [FrameworksComponent],
imports: [SharedModule],
providers: [],
exports: [SharedModule]
})
export class FrameworksModule { }