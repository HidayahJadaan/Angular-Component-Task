import { Component } from '@angular/core';
import { components } from '../components/components';
@Component({
  selector: 'app-message',
  imports: [...components],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {

}
