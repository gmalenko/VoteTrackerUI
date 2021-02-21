import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VotePeriod } from 'src/app/models/VotePeriod';
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: 'root'
})
export class VotePeriodService {

  constructor(private httpSerive: HttpService) { }

  getVotePeriod(): Observable<VotePeriod> {
    return this.httpSerive.get('VotePeriod');
  }
}
