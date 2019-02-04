import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LanguagesComponent } from './languages.component';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
declarations: [LanguagesComponent, TimeAgoPipe],
imports: [SharedModule],
providers: [TimeAgoPipe],
exports: [SharedModule]
})
export class LanguagesModule { }