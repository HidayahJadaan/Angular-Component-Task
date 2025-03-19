import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-name-component',
  imports: [],
  templateUrl: './user-name-component.component.html',
  styleUrl: './user-name-component.component.scss',
})
export class UserNameComponentComponent {
  @Input('first-name') firstName: string = '';
  @Input('last-name') lastName: string = '';


}
