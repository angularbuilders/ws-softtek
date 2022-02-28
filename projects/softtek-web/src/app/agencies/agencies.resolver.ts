import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { Agency } from '../core/models/agency';
import { AgenciesService } from './agencies.service';

@Injectable({
  providedIn: 'root',
})
export class AgenciesResolver implements Resolve<Agency[]> {
  constructor(private router: Router, private agencies: AgenciesService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Agency[]> {
    return this.agencies.getAgencies$().pipe(
      catchError((err) => {
        if ((err.status = 404)) {
          return of([]);
        }
        this.router.navigate(['/']);
        return EMPTY;
      })
    );
  }
}
