import { Injectable } from '@angular/core';

import { User } from 'src/app/shared/interface/user/user';
import { TokenService } from '../authentication/token/token.service';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({});

  constructor(private token: TokenService) {
    if (this.token.possuiToken()) {
      this.decodificarJWT();
    }
  }

  private decodificarJWT() {
    const token = this.token.retornaToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  retornarUser() {
    return this.userSubject.asObservable();
  }

  salvarToken(token: string) {
    this.token.salvarToken(token);
    this.decodificarJWT();
  }

  logout() {
    this.token.excluirToken();
    this.userSubject.next({});
  }

  estaLogado() {
    return this.token.possuiToken();
  }
}
