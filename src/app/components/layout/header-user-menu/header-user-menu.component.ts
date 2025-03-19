import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderUserNameCompComponent } from '../header-user-name-comp/header-user-name-comp.component';
import { HeaderLogoutCompComponent } from '../header-logout-comp/header-logout-comp.component';

@Component({
  selector: 'app-header-user-menu',
  imports: [HeaderUserNameCompComponent, HeaderLogoutCompComponent],
  templateUrl: './header-user-menu.component.html',
  styleUrl: './header-user-menu.component.scss',
})
export class HeaderUserMenuComponent {
  @Output() LogoutClick: EventEmitter<string> = new EventEmitter<string>();
  @Input() userName: string = '';

  LogoutClicked(value: string): void {
    this.LogoutClick.emit(value);
    console.log('Header User Menu Comp', value);
  }
}
