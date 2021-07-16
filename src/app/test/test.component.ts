import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-test', //as a class name
  // selector: '[app-test]', //as a attribute name
  selector: 'app-test',
  templateUrl: './test.component.html',
//   template: `<div>
//   <h2 style=color:black>Interpolation concept</h2>
//   <h2>Welcome {{ name }}</h2>
//   <h2>{{ 2 + 2 }}</h2>
//   <h2>{{ 'Welcome ' + name }}</h2>
//   <h2>{{ name.length }}</h2>
//   <h2>{{ name.toUpperCase() }}</h2>
//   <h2>{{ greetUser() }}</h2>
//   <h2>{{ siteUrl }}</h2>
// </div>`,
  styleUrls: ['./test.component.css'],
  // styles: [
  //   `
  //     div {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class TestComponent implements OnInit {
  public name = 'Rajeev Loghade';
  public siteUrl = window.location.href;
  public myId="testId";
  public successClass="text-success";
  public hasError=false;
  public isSpecial=true;
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }


  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return 'Hello ' + this.name;
  }
}
