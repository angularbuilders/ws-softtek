import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from './models/agency';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getAgencies$(): Observable<Agency[]> {
    return this.http.get<Agency[]>('http://localhost:3000/agencies');
  }
}
