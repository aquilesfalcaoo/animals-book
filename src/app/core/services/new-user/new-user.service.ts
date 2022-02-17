import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from 'src/app/shared/interface/new-user';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  private readonly API = 'http://localhost:3000/user/signup';
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(newUser: NewUser) {
    return this.http.post(`${this.API}`, newUser);
  }
}
