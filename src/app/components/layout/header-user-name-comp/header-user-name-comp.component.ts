import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-user-name-comp',
  imports: [],
  templateUrl: './header-user-name-comp.component.html',
  styleUrl: './header-user-name-comp.component.scss',
})
export class HeaderUserNameCompComponent {
  @Input() userName: string = '';

  @Output() LogoutClick: EventEmitter<string> = new EventEmitter<string>();

  LogoutClicked(value: string): void {
    this.LogoutClick.emit(value);
    console.log('Header User Menu Comp', value);
  }
}
