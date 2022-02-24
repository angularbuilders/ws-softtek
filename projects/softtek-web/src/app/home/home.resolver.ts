import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<any[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return of([{ id: '1', name: 'SpaceX' }]).pipe(delay(2000));
  }
}
