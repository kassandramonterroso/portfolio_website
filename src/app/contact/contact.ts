import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  submitted=false;

  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  submitForm(){
    this.submitted=true;
  }

  sendEmail(){
    emailjs.send(
      'service_vska3lk',
      'template_63r36ms', {
        name: this.formData.name,
        email: this.formData.email,
        message: this.formData.message
      },
      'qEVAtVhf3bS1wLpBd'
    ).then(
      () => {
        this.submitted = true;
        this.formData = {name: '', email: '', message: ''};
      },
      (error) => {
        console.error('Failed...', error);
        alert('Email failed to send');
      }
    )
  }

  closeModal(){
    this.submitted=false;
  }

  

}
