import { Component, Input, OnInit } from '@angular/core';
import { SelfRegistration } from 'src/app/models/self-registration';
import { VoteCandidate } from 'src/app/models/vote-candidate';
import { VotePeriod } from 'src/app/models/vote-period';
import { VoteCandidateService } from 'src/app/service/vote-candidate/vote-candidate.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-select-candidates',
  templateUrl: './select-candidates.component.html',
  styleUrls: ['./select-candidates.component.scss']
})
export class SelectCandidatesComponent implements OnInit {

  @Input() selfRegistration: SelfRegistration;
  @Input() votePeriod: VotePeriod;
  candidateList: VoteCandidate[] = [];
  radioSelected: any;
  submitEndabled: boolean;
  constructor(private voteCandidateService: VoteCandidateService,private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log('yes');
    this.loadCandidates();
    this.submitEndabled = true;
  }

  loadCandidates(): void {
    this.voteCandidateService.getCandidates().subscribe(result => {
      this.candidateList = result;
      console.log(this.candidateList);
    });
  }

  submitClick(): void {
    const selectedCandidate = this.candidateList.find(x => x.id === this.radioSelected);
    this.submitEndabled = false;

    const modalRef = this.modalService.open(ConfirmationComponent);
    modalRef.componentInstance.candidate = selectedCandidate;
  }





}
