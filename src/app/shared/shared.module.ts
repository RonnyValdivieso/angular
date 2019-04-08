import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguagesComponent } from '../components/languages/languages.component';
import { FrameworksComponent } from '../components/frameworks/frameworks.component';
import { CustomDateTimePipe } from '../pipes/custom-date.pipe';

@NgModule({
 imports:      [ CommonModule ],
 declarations: [ LanguagesComponent, FrameworksComponent, CustomDateTimePipe ],
 exports:      [ LanguagesComponent, FrameworksComponent,
                  CommonModule, FormsModule ]
})
export class SharedModule { }