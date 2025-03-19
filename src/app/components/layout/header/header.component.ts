import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
import { HeaderMenuBarComponent } from '../header-menu-bar/header-menu-bar.component';
import { HeaderUserMenuComponent } from '../header-user-menu/header-user-menu.component';

@Component({
  selector: 'app-header',
  imports: [
    HeaderLogoComponent,
    HeaderMenuBarComponent,
    HeaderUserMenuComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() LogoutClick: EventEmitter<string> = new EventEmitter<string>();
  @Input() userName: string = '';

  LogoutClicked(value: string): void {
    this.LogoutClick.emit(value);
    console.log('Header Comp', value);
  }
}
