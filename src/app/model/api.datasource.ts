import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable()
export class ApiDataSource {
  private allUrl: string =
    'https://tibatodnetcoreapi.herokuapp.com/api/Todos/All';
  private singleUrl: string =
    'https://tibatodnetcoreapi.herokuapp.com/api/Todos/Single/';
  private addUpdateUrl: string =
    'https://tibatodnetcoreapi.herokuapp.com/api/Todos/AddOrUpdate';
  private deleteUrl: string =
    'https://tibatodnetcoreapi.herokuapp.com/api/Todos/Delete/';
  private searchUrl: string =
    'https://tibatodnetcoreapi.herokuapp.com/api/Todos/Search/';

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
