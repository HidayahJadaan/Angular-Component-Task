import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-logout-comp',
  imports: [],
  templateUrl: './header-logout-comp.component.html',
  styleUrl: './header-logout-comp.component.scss',
})
export class HeaderLogoutCompComponent {
  @Output() LogoutClick: EventEmitter<string> = new EventEmitter<string>();

  LogoutClicked(): void{
// const value = 'Header - logout Comp';
const value = 'true';
    console.log('Header - logout Comp', value);
    
    this.LogoutClick.emit(value);
  }
}
