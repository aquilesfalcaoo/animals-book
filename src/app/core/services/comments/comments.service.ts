import { Comments } from './../../../shared/interface/comments/comments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  searchComment(id: number): Observable<Comments> {
    return this.http.get<Comments>(`${API}/photos/${id}/comments`);
  }

  includeComment(id: number, commentText: string): Observable<Comments> {
    return this.http.post<Comments>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
