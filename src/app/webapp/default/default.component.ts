import { Component, OnInit } from '@angular/core';
import { SelfRegistration, SelfRegistrationResponse } from 'src/app/models/self-registration';
import { VotePeriod } from 'src/app/models/vote-period';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  isRegistrationComplete: boolean;
  isCandidateSelected: boolean;
  selfRegistration: SelfRegistration;
  votePeriod: VotePeriod;
  processCompleted: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isRegistrationComplete = false;
    this.isCandidateSelected = false;
    this.processCompleted = false;
  }

  registrationCompleted(input: SelfRegistrationResponse): void {
    if (input.response) {
      this.isRegistrationComplete = true;
      this.selfRegistration = input.selfRegistration;
      this.votePeriod = input.votePeriod;
    }
  }
  candidatedSelected(input: boolean): void {
    if (input) {
      this.processCompleted = true;
      this.isCandidateSelected = true;
    }
  }

}
