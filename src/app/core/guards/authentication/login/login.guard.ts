import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad {
  constructor(private userService: UserService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userService.estaLogado()) {
      this.router.navigate(['animals']);
      return false;
    }
    return true;
  }
}
