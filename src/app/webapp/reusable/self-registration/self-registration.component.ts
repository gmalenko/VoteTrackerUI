import { Component, OnInit } from '@angular/core';
import { SelfRegistrationService } from 'src/app/service/self-registration/self-registration.service';
import { VotePeriodService } from 'src/app/service/vote-period/vote-period.service';

@Component({
  selector: 'app-self-registration',
  templateUrl: './self-registration.component.html',
  styleUrls: ['./self-registration.component.scss']
})
export class SelfRegistrationComponent implements OnInit {

  constructor(private selfRegistrationService: SelfRegistrationService, private votePeriodService: VotePeriodService) { }

  ngOnInit(): void {
    
  }

}
