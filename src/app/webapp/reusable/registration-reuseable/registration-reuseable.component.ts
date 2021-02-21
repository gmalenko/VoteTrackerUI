import { Component, EventEmitter, Input, OnInit, Output, Self } from '@angular/core';
import { SelfRegistration, SelfRegistrationResponse } from 'src/app/models/self-registration';
import { RegistrationService } from 'src/app/service/registration/registration.service';
import { ToasterService } from 'src/app/service/toaster/toaster.service';
import { VotePeriodService } from 'src/app/service/vote-period/vote-period.service';

@Component({
  selector: 'app-registration-reuseable',
  templateUrl: './registration-reuseable.component.html',
  styleUrls: ['./registration-reuseable.component.scss']
})
export class RegistrationReuseableComponent implements OnInit {

  firstName: string;
  lastName: string;
  isEligible: boolean;
  loading: boolean;
  existingPerson: boolean;
  registrationList: SelfRegistration[] = [];


  @Input() currentPerson: SelfRegistration;
  @Output() completed = new EventEmitter<SelfRegistrationResponse>();

  constructor(private toasterService: ToasterService,
    private votePeriodService: VotePeriodService,
    private registrationService: RegistrationService) { }

  ngOnInit(): void {
    if (this.currentPerson) {
      this.firstName = this.currentPerson.firstname;
      this.lastName = this.currentPerson.lastname;
      this.isEligible = this.currentPerson.isElgible;
      this.existingPerson = true;
    }

    this.registrationService.getRegistrations().subscribe(result => {
      this.registrationList = result;
      
    });

  }
  submitClicked(): void {
    if (!this.firstName || this.firstName.trim() === '') {
      this.toasterService.Error('First Name is required');
    } else if (!this.lastName || this.firstName.trim() === '') {
      this.toasterService.Error('Last Name is required');
    } else {

      const selfRegistration = new SelfRegistration();
      selfRegistration.firstname = this.firstName;
      selfRegistration.lastname = this.lastName;
      selfRegistration.isElgible = this.isEligible;

      this.votePeriodService.getVotePeriod().subscribe(result => {
        this.loading = true;
        selfRegistration.votePeriod = result.id;
        if (!this.existingPerson) {
          this.registrationService.submitRegistration(selfRegistration).subscribe(registrationResult => {
            if (registrationResult.id) {
              const selfRegistrationResponse = new SelfRegistrationResponse();
              selfRegistrationResponse.response = true;
              selfRegistrationResponse.selfRegistration = registrationResult;
              selfRegistrationResponse.votePeriod = result;
              this.registrationList.push(registrationResult);
              this.firstName = '';
              this.lastName = '';
              this.isEligible = false;
              this.toasterService.Success('Success');
              this.loading = false;

            }
          }, error => {
            this.toasterService.Error('There was an erorr. Please try again');
            this.loading = false;
          });
        } else {
          this.registrationService.updateRegistration(selfRegistration).subscribe(registrationResult => {
            const selfRegistrationResponse = new SelfRegistrationResponse();
            selfRegistrationResponse.response = true;
            selfRegistrationResponse.selfRegistration = registrationResult;
            selfRegistrationResponse.votePeriod = result;
            this.registrationList.push(registrationResult);
            this.firstName = '';
            this.lastName = '';
            this.isEligible = false;
            this.toasterService.Success('Success');
            this.loading = false;

          }, error => {
            this.toasterService.Error('There was an error. Please try again');
            this.loading = false;
          });
        }

      });
    }

  }
}
