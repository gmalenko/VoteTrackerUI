import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VoteTally } from 'src/app/models/vote-tally';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class VoterTalleyService {

  constructor(private httpService: HttpService) { }

  setVote(input: VoteTally): Observable<VoteTally> {
    return this.httpService.put('votertalley', input);
  }

}
