import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VoteTally } from 'src/app/models/vote-tally';
import { VoterSummary } from 'src/app/models/voter-summary';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class VoterTalleyService {

  constructor(private httpService: HttpService) { }

  setVote(input: VoteTally): Observable<VoteTally> {
    return this.httpService.put('votertalley', input);
  }

  getVoteSummary(): Observable<VoterSummary[]> {
    return this.httpService.get('votertalley/GetVoteSummary');
  }

}
