import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputFieldComponent } from './personal/input-field.component';

import { MaterialModule } from './material/material.module';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfessionalComponent } from './professional/professional.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,  MatMomentDateModule,MaterialModule, BrowserAnimationsModule, AppRoutingModule],
  
  declarations: [ AppComponent, HelloComponent, InputFieldComponent, ProfessionalComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
