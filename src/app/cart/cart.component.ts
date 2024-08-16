import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  myForm: FormGroup;
  formData: any;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,}$')]],
      middleName: ['', [Validators.pattern('^[a-zA-Z]{3,}$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,}$')]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      payment: ['COD']
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.formData = this.myForm.value;
    } else {
      console.log('Form is not valid');
    }
  }

}
