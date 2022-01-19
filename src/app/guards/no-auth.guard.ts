import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private globalService: GlobalService
  ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.globalService.getStorage('user').pipe(
      take(1),
      map((user: any) => {
        if (user.emailh) {
          this.router.navigate(['']);
          return false;
        } else {
          return true;
        }
      })
    );
  }

}
