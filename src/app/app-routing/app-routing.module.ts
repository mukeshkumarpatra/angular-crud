import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InputFieldComponent} from './personal/input-field.component';
import {ProfessionalComponent} from './professional/professional.component';

const appRoutes: Routes = [
  {path:'personal', component:InputFieldComponent},
  {path:'professional', component:ProfessionalComponent},
  {path:'', redirectTo:'/personal', pathMatch:'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }