import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder) {}

  registrationForm = this.formBuilder.group({
    userName: ['Rick'],
    password: [''],
    confirmPassword: [''],
    address: this.formBuilder.group({
      city: [''],
      state: [''],
      postalCode: [''],
    }),
  });

  // registrationForm = new FormGroup({
  //   userName: new FormControl('Rajeev'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl('City'),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   }),
  // });

  onSubmit() {}

  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'Rajeev Loghade',
      password: '1234',
      confirmPassword: '1234',
    });
  }

  // loadApiData() {
  //   this.registrationForm.setValue({
  //     userName: 'Rajeev Loghade',
  //     password: '1234',
  //     confirmPassword: '1234',
  //     address: {
  //       city: 'Indore',
  //       state: 'MP',
  //       postalCode: '452001',
  //     },
  //   });
  // }
}
