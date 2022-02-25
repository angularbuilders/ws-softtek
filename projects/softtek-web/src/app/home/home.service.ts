import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from './models/agency';
import { Trip } from './models/trip';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getAgencies$(): Observable<Agency[]> {
    return this.http.get<Agency[]>('http://localhost:3000/agencies');
  }
  getAgenciesError$(): Observable<Agency[]> {
    return this.http.get<Agency[]>('http://localhost:3000/agencies-error');
  }
  getTrips$(): Observable<Trip[]> {
    return this.http.get<Trip[]>('http://localhost:3000/trips');
  }
  getTripsError$(): Observable<Trip[]> {
    return this.http.get<Trip[]>('http://localhost:3000/trips-error');
  }
}
