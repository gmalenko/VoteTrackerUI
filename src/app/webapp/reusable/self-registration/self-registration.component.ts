import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelfRegistration, SelfRegistrationResponse } from 'src/app/models/self-registration';
import { SelfRegistrationService } from 'src/app/service/self-registration/self-registration.service';
import { ToasterService } from 'src/app/service/toaster/toaster.service';
import { VotePeriodService } from 'src/app/service/vote-period/vote-period.service';

@Component({
  selector: 'app-self-registration',
  templateUrl: './self-registration.component.html',
  styleUrls: ['./self-registration.component.scss']
})
export class SelfRegistrationComponent implements OnInit {
  firstName: string;
  lastName: string;
  emailAddress: string;
  loading: boolean;

  @Output() completed = new EventEmitter<SelfRegistrationResponse>();



  constructor(private selfRegistrationService: SelfRegistrationService,
    private votePeriodService: VotePeriodService,
    private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.loading = false;
  }

  submitClicked(): void {
    if (!this.firstName || this.firstName.trim() === '') {
      this.toasterService.Error('First Name is required');
    } else if (!this.lastName || this.firstName.trim() === '') {
      this.toasterService.Error('Last Name is required');
    }

    const selfRegistration = new SelfRegistration();
    selfRegistration.firstname = this.firstName;
    selfRegistration.lastname = this.lastName;
    selfRegistration.email = this.emailAddress;

    this.votePeriodService.getVotePeriod().subscribe(result => {
      this.loading = true;
      selfRegistration.votePeriod = result.id;
      this.selfRegistrationService.submitSelfRegistration(selfRegistration).subscribe(registrationResult => {
        if (registrationResult.id) {
          const selfRegistrationResponse = new SelfRegistrationResponse();
          selfRegistrationResponse.response = true;
          selfRegistrationResponse.selfRegistration = registrationResult;
          selfRegistrationResponse.votePeriod = result;
          this.completed.emit(selfRegistrationResponse);
        }
      }, error => {
        this.toasterService.Error('There was an erorr. Please try again');
        this.loading = false;
      });

    });


  }
}
