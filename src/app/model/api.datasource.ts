import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable()
export class ApiDataSource {
  private allUrl: string = 'http://localhost:3001/todos/all';
  private singleUrl: string = 'http://localhost:3001/todos/single/';
  private addUpdateUrl: string = 'http://localhost:3001/todos/addOrUpdate';
  private deleteUrl: string = 'http://localhost:3001/todos/delete/';
  private searchUrl: string = 'http://localhost:3001/todos/search/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.allUrl);
  }

  search(s: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.searchUrl + s);
  }

  getSingle(id: string): Observable<Todo> {
    return this.http.get<Todo>(this.singleUrl + id);
  }

  addOrUpdate(obj: Todo): Observable<Todo[]> {
    return this.http.post<Todo[]>(this.addUpdateUrl, obj);
  }

  delete(id: string): Observable<Todo[]> {
    return this.http.delete<Todo[]>(this.deleteUrl + id);
  }
}
