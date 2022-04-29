import { Animals } from './../animal';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { AnimalsService } from 'src/app/core/services/animals/animals.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalsListResolver implements Resolve<Animals> {
  constructor(
    private animalsService: AnimalsService,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animals> {
    return this.userService.retornarUser().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animalsService.userList(userName);
      }),
      take(1)
    );
  }
}
