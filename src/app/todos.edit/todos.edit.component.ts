import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo.model';
import { DataRepository } from '../model/repository.service';

@Component({
  selector: 'todos-edit',
  templateUrl: './todos.edit.component.html',
  styleUrls: ['./todos.edit.component.scss'],
})
export class TodosEditComponent implements OnInit {
  @Input() todo: Todo;
  @Output() hideEdit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service: DataRepository) {}

  ngOnInit(): void {}

  onClickSave() {
    this.todo.dueDate = new Date(this.todo.date).getTime();
    this.service.addOrUpdateTodo(this.todo);
  }

  onClickCancel() {
    this.hideEdit.emit(false);
  }
}
