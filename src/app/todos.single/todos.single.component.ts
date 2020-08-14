import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo.model';
import { DataRepository } from '../model/repository.service';

@Component({
  selector: '[todos-single]',
  templateUrl: './todos.single.component.html',
  styleUrls: ['./todos.single.component.scss'],
})
export class TodosSingleComponent implements OnInit {
  @Input() todo: Todo;
  @Input() index: Number;
  @Output() sendId: EventEmitter<string> = new EventEmitter<string>();
  @Output() showEdit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service: DataRepository) {}

  ngOnInit(): void {}

  onClickEdit() {
    this.sendId.emit(this.todo._id);
    this.showEdit.emit(true);
  }

  onClickDelete(id) {
    this.service.deleteTodo(id);
  }

  onClickDone() {
    this.service.addOrUpdateTodo(this.todo);
  }
}
