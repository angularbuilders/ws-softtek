import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { Agency } from '../core/models/agency';
import { Trip } from '../core/models/trip';
import { HomeService } from './home.service';

@Component({
  selector: 'stk-web-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  agencies$: Observable<Agency[]> | undefined;
  trips$: Observable<Trip[]> | undefined;
  agenciesError$ = new BehaviorSubject<string>('');
  tripsError$ = new BehaviorSubject<string>('');
  constructor(private home: HomeService) {}

  ngOnInit(): void {
    this.agencies$ = this.getDelayedAgencies();
    // this.agencies$ = this.getEmptyAgencies();
    // this.agencies$ = this.getErroredAgencies();
    // this.trips$ = this.getDelayedTrips();
    // this.trips$ = this.getEmptyTrips();
    this.trips$ = this.getErroredTrips();
  }

  private getDelayedAgencies(): Observable<Agency[]> {
    return this.home.getAgencies$().pipe(delay(2000));
  }
  private getEmptyAgencies(): Observable<Agency[]> {
    return of([]).pipe(delay(2000));
  }
  private getErroredAgencies(): Observable<Agency[]> {
    return this.home.getAgenciesError$();
  }
  private getDelayedTrips(): Observable<Trip[]> {
    return this.home.getTrips$().pipe(delay(2000));
  }
  private getEmptyTrips(): Observable<Trip[]> {
    return of([]).pipe(delay(2000));
  }
  private getErroredTrips(): Observable<Trip[]> {
    return this.home.getTripsError$();
  }
}
