import { relative } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SelfRegistration } from 'src/app/models/self-registration';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SelfRegistrationService {

  constructor(private httpService: HttpService) { }

  submitSelfRegistration(input: SelfRegistration): Observable<SelfRegistration> {
    return this.httpService.put('SelfRegistration', input);
  }

  updateSelfRegistration(input: SelfRegistration): Observable<SelfRegistration> {
    return this.httpService.post('SelfRegistration', input);
  }
}
