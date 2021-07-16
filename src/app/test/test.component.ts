import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-test', //as a class name
  // selector: '[app-test]', //as a attribute name
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template: `<div>
    <h2>Welcome {{ name }}</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'Welcome ' + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
  </div>`,
  // styleUrls: ['./test.component.css']
  styles: [
    `
      div {
        color: red;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'Rajeev Loghade';
  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return 'Hello ' + this.name;
  }
}
