import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';
import { DataRepository } from '../model/repository.service';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'todos-add',
  templateUrl: './todos.add.component.html',
  styleUrls: ['./todos.add.component.scss'],
})
export class TodosAddComponent implements OnInit {
  todo: Todo = {};

  constructor(private service: DataRepository) {}

  onClickAdd() {
    this.todo.dueDate = new Date(this.todo.dueDate).getTime();
    this.service.addOrUpdateTodo(this.todo);
    this.todo = {};
  }

  ngOnInit(): void {}
}
