import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private readonly titleListChange: Subject<any> = new Subject<any>();
  constructor(private httpClient: HttpClient) {}

  titleListChangeEvent() {
    this.titleListChange.next(true);
  }

  titleListChangeListener(): Observable<any> {
    return this.titleListChange.asObservable();
  }
}
