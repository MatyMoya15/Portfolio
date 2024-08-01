import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NgClass } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  contactForm: FormGroup;
  copied = false;
  showSuccessAlert = false;
  showErrorAlert = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, this.emailValidator]],
      message: ['', [Validators.required]]
    });
  }

  copyToClipboard() {
    navigator.clipboard.writeText('matymoyano4@gmail.com').then(() => {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    });
  }

  emailValidator(control: AbstractControl): { [key: string]: any } | null {
    const email = control.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? null : { emailInvalid: true };
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message,
      };

      emailjs.send('service_xja6d3s', 'template_2fm9jy4', templateParams, 'iAh-giIpQC6nJlijX')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.showSuccessAlert = true;
          this.contactForm.reset();
          setTimeout(() => {
            this.showSuccessAlert = false;
          }, 3500);
        }, (error) => {
          console.error(error.text);
          this.showErrorAlert = true;
          setTimeout(() => {
            this.showErrorAlert = false;
          }, 3500);
        });
    } else {
      // Mark all fields as touched to show validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
