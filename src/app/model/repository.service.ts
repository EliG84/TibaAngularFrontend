import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { Todo } from './todo.model';
import { ApiDataSource } from './api.datasource';

@Injectable()
export class DataRepository {
  private todos: Todo[] = new Array<Todo>();
  private sort = (sortBy: string, direction: boolean) =>
    _.orderBy(this.todos, [sortBy], [direction ? true : false]);

  constructor(private dataSource: ApiDataSource) {
    this.getAllTodos();
  }

  getAllTodos(): void {
    this.dataSource.getAll().subscribe((data) => (this.todos = data));
  }

  sortTodos(s: string, d: boolean = false) {
    this.todos = this.sort(s, d);
  }

  getTodos(): Todo[] {
    return this.todos.filter((item) => !item.done);
  }

  getCompleted(): Todo[] {
    return this.todos.filter((item) => item.done);
  }

  getById(id: string): Todo {
    return this.todos.find((item) => item._id === id);
  }

  searchTodos(s: string): void {
    this.dataSource.search(s).subscribe((data) => (this.todos = data));
  }

  addOrUpdateTodo(obj: Todo): void {
    this.dataSource.addOrUpdate(obj).subscribe((data) => (this.todos = data));
  }

  deleteTodo(id: string): void {
    this.dataSource.delete(id).subscribe((data) => (this.todos = data));
  }
}
