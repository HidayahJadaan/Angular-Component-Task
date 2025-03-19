import { Component } from '@angular/core';
import { components } from '../components/components';
@Component({
  selector: 'app-about',
  imports: [...components],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
