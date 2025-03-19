import { Component, EventEmitter, Output } from '@angular/core';
import { layoutComponents } from '../Layout/Layout';

@Component({
  selector: 'app-contact-us',
  imports: [...layoutComponents],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  inputName: string = '';
  inputEmail: string = '';
  inputSubject: string = '';
  inputMessage: string = '';

  bgClassIcon: Record<string, boolean> = { 'bx-sun': false, 'bx-moon': true };
  bgClassColor: Record<string, boolean> = {
    'no-dark': true,
    'dark-mode': false,
  };

  
  setName(event: any): void {
    this.inputName = event.target.value;
  }
  setEmail(event: any): void {
    this.inputEmail = event.target.value;
  }
  setSubject(event: any): void {
    this.inputSubject = event.target.value;
  }
  setMessage(event: any): void {
    this.inputMessage = event.target.value;
  }

  sendContactUsData(): void {
    if (
      this.inputName === '' ||
      this.inputEmail === '' ||
      this.inputMessage === '' ||
      this.inputSubject === ''
    ) {
      alert('Please fill all required fields');
    } else if (
      this.inputName != '' &&
      this.inputEmail != '' &&
      this.inputMessage != '' &&
      this.inputSubject != ''
    ) {
      alert('Your message has been sent, Thank you!');
    }
  }

  toggleDarkMode(): void {
    if (this.bgClassIcon['bx-sun']) {
      this.bgClassIcon['bx-sun'] = false;
      this.bgClassIcon['bx-moon'] = true;
    } else {
      this.bgClassIcon['bx-sun'] = true;
      this.bgClassIcon['bx-moon'] = false;
    }

    if (this.bgClassColor['no-dark']) {
      this.bgClassColor['no-dark'] = false;
      this.bgClassColor['dark-mode'] = true;
    } else {
      this.bgClassColor['no-dark'] = true;
      this.bgClassColor['dark-mode'] = false;
    }

    this.bgClassIcon = { ...this.bgClassIcon };
    this.bgClassColor = { ...this.bgClassColor };
  }
}
