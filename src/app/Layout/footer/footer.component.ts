import { Component, Input } from '@angular/core';
import { UserNameComponentComponent } from "../user-name-component/user-name-component.component";

@Component({
  selector: 'app-footer',
  imports: [UserNameComponentComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() bgClassColor: Record<string, boolean> = {};
}
