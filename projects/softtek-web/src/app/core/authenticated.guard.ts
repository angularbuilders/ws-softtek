import { Injectable } from '@angular/core';
import { ActivatedRoute, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanLoad {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.router.createUrlTree(['/login'], {
      queryParams: { returnUrl: this.router.getCurrentNavigation()?.extractedUrl.toString() },
    });
  }
}
