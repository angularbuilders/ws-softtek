import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Agency } from '../core/models/agency';

@Injectable({
  providedIn: 'root',
})
export class AgenciesService {
  constructor(private http: HttpClient) {}

  getAgencies$(): Observable<Agency[]> {
    // return this.http.get<Agency[]>('http://localhost:3000/agencies-notfound');
    return this.http.get<Agency[]>('http://localhost:3000/agencies').pipe(delay(500));
  }
}
