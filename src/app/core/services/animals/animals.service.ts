import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/core/services/authentication/token/token.service';
import { environment } from 'src/environments/environment';
import { Animals } from '../../../pages/animals/animal';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient, private token: TokenService) {}

  userList(username: string): Observable<Animals> {
    const token = this.token.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Animals>(`${API}/${username}/photos`, {
      headers,
    });
  }
}
