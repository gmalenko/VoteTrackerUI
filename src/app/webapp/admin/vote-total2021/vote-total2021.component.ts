import { Component, OnInit } from '@angular/core';
import { VoterSummary } from 'src/app/models/voter-summary';
import { VoterTalleyService } from 'src/app/service/voter-talley/voter-talley.service';

@Component({
  selector: 'app-vote-total2021',
  templateUrl: './vote-total2021.component.html',
  styleUrls: ['./vote-total2021.component.scss']
})
export class VoteTotal2021Component implements OnInit {

  voterSummary: VoterSummary[] = [];

  constructor(private voterTallyService: VoterTalleyService) { }




  ngOnInit(): void {
    this.voterTallyService.getVoteSummary().subscribe(result => {
      this.voterSummary = result;      
    });
  }

}
