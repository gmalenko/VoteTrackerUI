import { Component, EventEmitter, Input, NgModuleRef, OnInit, Output } from '@angular/core';
import { SelfRegistration } from 'src/app/models/self-registration';
import { VoteCandidate } from 'src/app/models/vote-candidate';
import { VotePeriod } from 'src/app/models/vote-period';
import { VoteCandidateService } from 'src/app/service/vote-candidate/vote-candidate.service';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { VoterTalleyService } from 'src/app/service/voter-talley/voter-talley.service';
import { VoteTally } from 'src/app/models/vote-tally';

@Component({
  selector: 'app-select-candidates',
  templateUrl: './select-candidates.component.html',
  styleUrls: ['./select-candidates.component.scss']
})
export class SelectCandidatesComponent implements OnInit {

  @Input() selfRegistration: SelfRegistration;
  @Input() votePeriod: VotePeriod;
  @Output() completed = new EventEmitter<boolean>();
  candidateList: VoteCandidate[] = [];
  radioSelected: any;
  submitEndabled: boolean;
  constructor(private voteCandidateService: VoteCandidateService,
    private modalService: NgbModal,
    private voteTallyService: VoterTalleyService) { }

  ngOnInit(): void {
    this.loadCandidates();
    this.submitEndabled = true;
  }

  loadCandidates(): void {
    this.voteCandidateService.getCandidates().subscribe(result => {
      this.candidateList = result;

    });
  }

  submitClick(): void {
    const selectedCandidate = this.candidateList.find(x => x.id === this.radioSelected);
    this.submitEndabled = false;

    const modalRef = this.modalService.open(ConfirmationComponent);
    modalRef.componentInstance.candidate = selectedCandidate;
    modalRef.result.then((data) => {
      // on close
    }, (reason) => {
      this.submitEndabled = true;
      // on dismiss
    });
    modalRef.componentInstance.response.subscribe(result => {
      if (result === true) {
        const voteTally = new VoteTally();
        voteTally.voteCandidate = selectedCandidate;
        voteTally.voteSelfRegistration = this.selfRegistration;
        this.voteTallyService.setVote(voteTally).subscribe(tallyResult => {
          if (tallyResult.id) {
            this.completed.emit(true);
            modalRef.close();
          }
        });
      }
      else {
        this.submitEndabled = true;
        modalRef.close();
      }
    })
  }





}
