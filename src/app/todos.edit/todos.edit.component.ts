import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo.model';
import calcDays from '../helper/helper.functions';
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
    // this.todo.dueDate = new Date(this.todo.date).getTime();
    this.todo.daysLeft = calcDays(this.todo.dueDate);
    this.service.addOrUpdateTodo(this.todo);
    this.hideEdit.emit(false);
  }

  onClickCancel() {
    this.hideEdit.emit(false);
  }
}
