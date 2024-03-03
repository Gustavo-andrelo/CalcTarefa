import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string = '';
  currentOperation: string | null = null;

  addToDisplay(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
    this.currentOperation = null;
  }

  operation(operator: string) {
    if (this.display !== '') {
      this.display += ' ' + operator + ' ';
      this.currentOperation = operator;
    }
  }

  calculate() {
    try {
      this.display = eval(this.display);
      this.currentOperation = null;
    } catch (error) {
      this.display = 'Error';
      this.currentOperation = null;
    }
  }
}
