import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3];
  oddNumbers = [1, 3 ,5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  values = [5, 10, 100];
  value = 10;
  i = 1;

  evenOrOdd() {
    if(this.onlyOdd) {
      return 'even';
    } else {
      return 'odd';
    }
  }
  count() {
    if(this.i < 2) {
      this.i++;
    } else {
      this.i = 0;
    }
  }
}
