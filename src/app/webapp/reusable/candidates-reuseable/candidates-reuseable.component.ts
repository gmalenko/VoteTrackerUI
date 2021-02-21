import { Component, OnInit } from '@angular/core';
import { VoteCandidate } from 'src/app/models/vote-candidate';
import { ToasterService } from 'src/app/service/toaster/toaster.service';
import { VoteCandidateService } from 'src/app/service/vote-candidate/vote-candidate.service';
import { VotePeriodService } from 'src/app/service/vote-period/vote-period.service';

@Component({
  selector: 'app-candidates-reuseable',
  templateUrl: './candidates-reuseable.component.html',
  styleUrls: ['./candidates-reuseable.component.scss']
})
export class CandidatesReuseableComponent implements OnInit {

  candidateList: VoteCandidate[] = [];
  firstName: string;
  lastName: string;
  loading: boolean;

  constructor(private canidateService: VoteCandidateService,
    private votePeriodService: VotePeriodService,
    private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.canidateService.getCandidates().subscribe(result => {
      this.candidateList = result;
    });
  }

  submitClicked(): void {
    const tempCandidate = new VoteCandidate();
    tempCandidate.firstname = this.firstName;
    tempCandidate.lastname = this.lastName;
    this.votePeriodService.getVotePeriod().subscribe(result => {
      tempCandidate.votePeriod = result.id;
      this.canidateService.createCandidate(tempCandidate).subscribe(candidateResult => {
        if (candidateResult.id) {
          this.candidateList.push(candidateResult);
          this.firstName = '';
          this.lastName = '';
          this.loading = false;
          this.toasterService.Success('Success');
        }
      },
        error => {
          this.toasterService.Error('There was an error. Please try again');
          this.loading = false;
        });
    });




  }

}
