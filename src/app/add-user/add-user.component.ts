import { Component, EventEmitter, Output } from '@angular/core';
import { layoutComponents } from '../Layout/Layout';

@Component({
  selector: 'app-add-user',
  imports: [...layoutComponents],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  inputFirstName: string = '';
  inputLastName: string = '';
  inputEmail: string = '';
  inputPassword: string = '';
  inputConfirmPassword: string = '';
  bgClassIcon: Record<string, boolean> = { 'bx-sun': false, 'bx-moon': true };
  bgClassColor: Record<string, boolean> = {
    'no-dark': true,
    'dark-mode': false,
  };

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

  setFirstName(event: any): void {
    this.inputFirstName = event.target.value;
  }
  setLastName(event: any): void {
    this.inputLastName = event.target.value;
  }

  setEmail(event: any): void {
    this.inputEmail = event.target.value;
  }
  setPassword(event: any): void {
    this.inputPassword = event.target.value;
  }
  confirmPassword(event: any): void {
    this.inputConfirmPassword = event.target.value;
  }

  createNewUser(): void {
    if (
      this.inputFirstName === '' ||
      this.inputLastName === '' ||
      this.inputEmail === '' ||
      this.inputPassword === '' ||
      this.inputConfirmPassword === ''
    ) {
      alert('Please fill all required feilds');
    } else if (
      this.inputFirstName != '' &&
      this.inputLastName != '' &&
      this.inputEmail != '' &&
      this.inputPassword != '' &&
      this.inputConfirmPassword != ''
    ) {
      if (this.inputPassword === this.inputConfirmPassword) {
        alert('User has been added successfully');
      } else {
        alert('Password and Confirm Password are mismatch!');
      }
    }
  }

  // ========================================
}

    

       

