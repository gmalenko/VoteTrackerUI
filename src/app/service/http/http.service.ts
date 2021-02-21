import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpHeader: HttpHeaders;

  private baseUrl: string;
  private options = {
    
  };

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
    this.httpHeader = new HttpHeaders();

  }

  post(url: string, input: object, isCustomUrl = false): Observable<any> {
    return this.http.post<string>(
      isCustomUrl ? url : this.baseUrl + url,
      input,
      // this.options
    );
  }

  get(url: string, isCustomUrl = false): Observable<any> {
    return this.http.get(isCustomUrl ? url : this.baseUrl + url, { headers: this.httpHeader });
  }

  put(url: string, input: object, isCustomUrl = false): Observable<any> {
    return this.http.put<string>(
      isCustomUrl ? url : this.baseUrl + url,
      input,
      // this.options
    );
  }

  delete(url: string, isCustomUrl = false): Observable<any> {
    return this.http.get(isCustomUrl ? url : this.baseUrl + url, 
      // this.options
      );
  }
}
