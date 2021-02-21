import { Component, OnInit } from '@angular/core';
import { SelfRegistrationResponse } from 'src/app/models/self-registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('fired');
  }
  registrationCompleted(input: SelfRegistrationResponse): void {
    if (input.response) {
      // this.isRegistrationComplete = true;
      // this.selfRegistration = input.selfRegistration;
      // this.votePeriod = input.votePeriod;
    }
  }

}
