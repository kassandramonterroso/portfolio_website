import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  submitted=false;

  submitForm(){
    this.submitted=true;
  }

  closeModal(){
    this.submitted=false;
  }

}
