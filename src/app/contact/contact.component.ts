import { Component, Output } from '@angular/core';
import { components } from '../components/components';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import {ContactForm} from '../Models/contact-form.model';
@Component({
  selector: 'app-contact',
  imports: [...components, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'], 
})
export class ContactComponent {
  ContactDataSubmitted: ContactForm = { name: '', email: '', message: '' };

  ContactFormDataSubmitted(value: ContactForm): void {
    this.ContactDataSubmitted = value;
  }
}
