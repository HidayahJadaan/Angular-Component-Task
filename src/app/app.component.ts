import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-component-task';

  // bgClick(): void {
  //   this.bgClass['bx-sun'] = !this.bgClass['bx-sun']; // swap value
  //   this.bgClass = { ...this.bgClass }; //fix databinding issue
  // }

  // borderClick(): void {
  //   this.bgClass['bx-moon'] = !this.bgClass['bx-moon']; // swap value
  //   this.bgClass = { ...this.bgClass }; //fix databinding issue
  // }
}
