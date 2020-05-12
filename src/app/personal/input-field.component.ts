import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControl } from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
 data: any = {};
  dataArray: any = [];
  submitted = false;

 roles = [
  {id:1, name:'Angular'},
  {id:2, name:'TypeScript'},
  {id:3, name:'JavaScript'},
  {id:4, name:'Bootstrap'},
 ];

userRole= 2;

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z]+@gmail.com")
    ]),
    age: new FormControl('', [
      Validators.required
    ]),
     location: new FormControl('', [
      Validators.required
    ]),
     gender: new FormControl('', [
      Validators.required
    ]),
    aadhar: new FormControl('', [
     Validators.required,
     Validators.minLength(12),
     
    ]),
    pan: new FormControl('', [
     Validators.required,
     Validators.minLength(10),
     
    ]),
  });
  get username() {
    return this.form.get('name');
  }
  get Email() {
    return this.form.get('email');
  }
  get age() {
    return this.form.get('age');
  }
 get location() {
    return this.form.get('location');
  }
  get gender() {
    return this.form.get('gender');
  }

 get aadhar() {
    return this.form.get('aadhar');
  }

  get pan() {
    return this.form.get('pan');
  }


  isFormValid(isCheck) {
    if (isCheck.target.checked) {
      this.form.get('name').setValidators([]); // or clearValidators()
      this.form.get('name').updateValueAndValidity();

      this.form.get('email').setValidators([]);
      this.form.get('email').updateValueAndValidity();

      this.form.get('age').setValidators([]);
      this.form.get('age').updateValueAndValidity();

      this.form.get('location').setValidators([]);
      this.form.get('location').updateValueAndValidity();
      
      this.form.get('gender').setValidators([]);
      this.form.get('gender').updateValueAndValidity();

      this.form.get('aadhar').setValidators([]);
      this.form.get('aadhar').updateValueAndValidity();

      this.form.get('pan').setValidators([]);
      this.form.get('pan').updateValueAndValidity();

     
    }
    else {
      this.form.get('name').setValidators([
        Validators.required,
        Validators.minLength(4)
      ]); // or clearValidators()
      this.form.get('name').updateValueAndValidity();

      this.form.get('email').setValidators([
        Validators.required,
        Validators.pattern("^[a-z]+@gmail.com")
      ]);
      this.form.get('email').updateValueAndValidity();


      this.form.get('age').setValidators([
        Validators.required
      ]);
      this.form.get('age').updateValueAndValidity();

      this.form.get('location').setValidators([
        Validators.required
      ]);
      this.form.get('location').updateValueAndValidity();

       this.form.get('gender').setValidators([
        Validators.required
      ]);
      this.form.get('gender').updateValueAndValidity();

      this.form.get('aadhar').setValidators([
        Validators.required,
        Validators.minLength(12),
      ]);
      this.form.get('aadhar').updateValueAndValidity();

      this.form.get('pan').setValidators([
        Validators.required,
        Validators.minLength(10),
      ]);
      this.form.get('pan').updateValueAndValidity();

    }
  }
 toggleCtrState() {
    const ctrl = this.form.get('date');
    if (ctrl.disabled) {
      ctrl.enable();
    } else {
      ctrl.disable();
    }
  }

  submitForm(form) {

    this.dataArray.push(this.data);
    this.data = {};
    console.log(this.data);


  }
  getData(index) {
    console.log(index);
    this.data = this.dataArray[index];

  }

  delete(index) {
    this.dataArray.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
  }


}