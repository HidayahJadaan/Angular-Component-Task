import { Component } from '@angular/core';
import { layoutComponents } from '../Layout/Layout';

@Component({
  selector: 'app-profile',
  imports: [...layoutComponents],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
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
}
