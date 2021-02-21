import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SelfRegistration } from 'src/app/models/self-registration';
import { HttpService } from 'src/app/service/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpService: HttpService) { }

  submitRegistration(input: SelfRegistration): Observable<SelfRegistration> {
    return this.httpService.put('VoterRegistration', input);
  }

  updateRegistration(input: SelfRegistration): Observable<SelfRegistration> {
    return this.httpService.post('VoterRegistration', input);
  }

  getRegistrations(): Observable<SelfRegistration[]> {
    return this.httpService.get('VoterRegistration');
  }

}
