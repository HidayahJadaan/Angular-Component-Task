import { Component, EventEmitter, Output } from '@angular/core';
import {ContactForm} from '../Models/contact-form.model';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  @Output() formDataSubmittedObj: EventEmitter<ContactForm> =
  new EventEmitter<ContactForm>();
  
  formData: ContactForm = { name: '', email: '', message: '' };
 
  SetName(event: any): void {
    this.formData.name = event.target.value;
  }

  SetEmail(event: any): void {
    this.formData.email = event.target.value;
  }

  SetMessage(event: any): void {
    this.formData.message = event.target.value;
  }

  ContactFormDataSubmitted(): void {
    this.formDataSubmittedObj.emit(this.formData);
  }
}
