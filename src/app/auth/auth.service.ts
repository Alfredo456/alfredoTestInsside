import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private client_id = '890bed2339bb40e689ba8fb83d2024db';
  private client_secret = '6a898fa587a5469a9c03abdb8dbc36a8';

  private getheader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(this.client_id + ':' + this.client_secret),
      }),
    };
  }

  getToken(): Observable<any> {
    return this.httpClient.post(environment.baseURL + '/api/token', 'grant_type=client_credentials', this.getheader());
  }
}
