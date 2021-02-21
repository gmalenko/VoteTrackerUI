import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VoteCandidate } from 'src/app/models/vote-candidate';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class VoteCandidateService {

  constructor(private httpService: HttpService) { }

  getCandidates(): Observable<VoteCandidate[]> {
    return this.httpService.get('VoteCandidate');
  }

  createCandidate(input: VoteCandidate): Observable<VoteCandidate> {
    return this.httpService.put('VoteCandidate', input);
  }

  updateCandidate(input: VoteCandidate): Observable<VoteCandidate> {
    return this.httpService.post('VoteCandidate', input);
  }

}
