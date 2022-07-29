import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post.Post';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8080/';
  constructor(private httpClient: HttpClient) { }

  public getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseUrl + 'posts');
  }
}
