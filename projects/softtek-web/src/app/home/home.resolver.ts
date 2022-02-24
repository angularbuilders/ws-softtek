import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { delay, Observable } from 'rxjs';
import { HomeService } from './home.service';
import { Agency } from './models/agency';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<Agency[]> {
  constructor(private home: HomeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Agency[]> {
    return this.home.getAgencies$().pipe(delay(2000));
  }
}
