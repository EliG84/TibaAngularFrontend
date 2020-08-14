import { Component, OnInit } from '@angular/core';
import { DataRepository } from 'src/app/model/repository.service';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'todos-main',
  templateUrl: './todos.main.component.html',
  styleUrls: ['./todos.main.component.scss'],
})
export class TodosMainComponent implements OnInit {
  showEdit: boolean = false;
  selectedTodo: Todo;

  constructor(private service: DataRepository) {}

  ngOnInit(): void {}

  get todos(): Todo[] {
    return this.service.getTodos();
  }

  get completed(): Todo[] {
    return this.service.getCompleted();
  }

  toggleShowEdit(args: boolean) {
    this.showEdit = args;
  }

  getSignleTodo(id: string) {
    this.selectedTodo = this.service.getById(id);
    this.selectedTodo.date = new Date(this.selectedTodo.dueDate)
      .toISOString()
      .slice(0, 10);
  }
}
