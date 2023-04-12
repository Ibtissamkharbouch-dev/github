import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable ,tap} from 'rxjs';
import { GithubApiService } from './github-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: GithubApiService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean {
      // if (!this.authService.getLogin()) {
      //   this.router.navigateByUrl('/login');
      //   return false;
      // }
      // return true;

      return this.authService.isLoggedIn$.pipe(
        tap(isLoggedIn => {
          if(!isLoggedIn) {
            this.router.navigate(['login']);
          }
        })
      );
  }

}
