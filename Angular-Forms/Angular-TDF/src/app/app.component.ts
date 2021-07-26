import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = false;
  submitted = false;
  errorMsg = '';
  userModel = new User(
    'Rob',
    'rob@gmail.com',
    7638475643,
    'default',
    'morning',
    true
  );

  constructor(private enrollService: EnrollmentService) {}

  validateTopic(value: string) {
    if (value === 'default') this.topicHasError = true;
    else this.topicHasError = false;
  }

  onSubmit() {
    this.submitted = true;
    // console.log(this.userModel);
    this.enrollService.enroll(this.userModel).subscribe(
      (data) => console.log('Success! ', data),
      (error) => (this.errorMsg = error.statusText)
    );
  }
}
