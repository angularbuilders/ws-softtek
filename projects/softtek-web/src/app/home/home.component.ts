import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';
import { HomeService } from './home.service';
import { Agency } from './models/agency';
import { Trip } from './models/trip';

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
    this.agencies$ = this.getErroredAgencies().pipe(
      tap({
        error: (err) => this.agenciesError$.next(err.message),
      })
    );
    this.trips$ = this.getDelayedTrips();
    //this.trips$ = this.getEmptyTrips();
    // this.trips$ = this.getErroredTrips().pipe(
    //   tap({
    //     error: (err) => this.tripsError$.next(err.message),
    //   })
    // );
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
