import { Component, EventEmitter, Output } from '@angular/core';
import { layoutComponents } from '../Layout/Layout';

@Component({
  selector: 'app-about-us',
  imports: [...layoutComponents],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
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
