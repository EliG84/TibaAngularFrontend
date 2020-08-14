import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { Todo } from './todo.model';
import { ApiDataSource } from './api.datasource';

@Injectable()
export class DataRepository {
  private todos: Todo[] = new Array<Todo>();
  private search = (n: string) =>
    this.todos.filter((item) =>
      item.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())
    );
  private sort = (sortBy: string, direction?: boolean) =>
    _.orderBy(this.todos, [sortBy], [direction ? true : false]);

  constructor(private dataSource: ApiDataSource) {
    this.dataSource.getAll().subscribe((data) => (this.todos = data));
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addOrUpdateTodo(obj: Todo): void {
    this.dataSource.addOrUpdate(obj).subscribe((data) => (this.todos = data));
  }

  deleteTodo(id: string): void {
    this.dataSource.delete(id).subscribe((data) => (this.todos = data));
  }
}
