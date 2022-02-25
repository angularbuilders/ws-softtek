import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap, throwError } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'stk-web-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  agencies$: Observable<any[]> | undefined;
  error$ = new BehaviorSubject<string>('');

  constructor(private home: HomeService) {}

  ngOnInit(): void {
    // this.agencies$ = this.getDelayedAgencies();
    // this.agencies$ = this.getEmptyAgencies();
    this.agencies$ = this.getErroredAgencies().pipe(
      tap({
        error: (err) => this.error$.next(err.message),
      })
    );
  }

  private getDelayedAgencies(): Observable<any[]> {
    return this.home.getAgencies$().pipe(delay(2000));
  }
  private getEmptyAgencies(): Observable<any[]> {
    return of([]).pipe(delay(2000));
  }
  private getErroredAgencies(): Observable<any[]> {
    return throwError(() => new Error('500')).pipe(delay(2000));
  }
}
