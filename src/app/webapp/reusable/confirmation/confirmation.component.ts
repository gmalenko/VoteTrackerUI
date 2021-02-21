import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VoteCandidate } from 'src/app/models/vote-candidate';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  @Input() candidate: VoteCandidate;
  @Output() response = new EventEmitter<boolean>();
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  yesClick(): void {
    this.response.emit(true);
  }

  noClick(): void {
    this.response.emit(false);
  }

  closeClick(): void {
    this.activeModal.dismiss();
  }

}
