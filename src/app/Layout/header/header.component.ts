import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserNameComponentComponent } from '../user-name-component/user-name-component.component';

@Component({
  selector: 'app-header',
  imports: [UserNameComponentComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() bgClassIcon: Record<string, boolean> = {};
  @Input() bgClassColor: Record<string, boolean> = {};
  @Output() darkModeToggled: EventEmitter<boolean> =    new EventEmitter<boolean>();

  LogoutHandler(): void {
    alert('Thank you for visiting our website, Good Bye');
    window.location.href = '/login'; 
  }


  onToggleDarkMode(): void {
    this.darkModeToggled.emit(true);
  }
}
