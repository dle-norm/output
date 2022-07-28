import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'output';
  myCount: number = 10;
  countChange(event: number) {
    this.myCount = event;
  }
}