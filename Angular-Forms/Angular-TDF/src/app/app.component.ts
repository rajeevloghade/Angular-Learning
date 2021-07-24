import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = false;
  userModel = new User(
    'Rob',
    'rob@gmail.com',
    7638475643,
    'default',
    'morning',
    true
  );

  validateTopic(value: string) {
    if (value === 'default') this.topicHasError = true;
    else this.topicHasError = false;
  }
}
