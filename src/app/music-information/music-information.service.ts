import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { token } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MusicInformationService {
  constructor(private httpClient: HttpClient) {}

  private getheader() {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    };
  }
  search(payload?: any): Observable<any> {
    return this.httpClient.get(
      environment.spotifyAPI_BaseURL +
        '/search' +
        '?query=' +
        (payload && payload.filter ? payload.filter : '') +
        '&type=track&offset=' +
        (payload && payload.index ? payload.index : '0') +
        '&limit=10',
      this.getheader()
    );
  }
}
