import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo.model';
import { DataRepository } from '../model/repository.service';

@Component({
  selector: 'todos-single',
  templateUrl: './todos.single.component.html',
  styleUrls: ['./todos.single.component.scss'],
})
export class TodosSingleComponent implements OnInit {
  @Input() todo: Todo;
  @Input() index: number;
  @Output() sendId: EventEmitter<string> = new EventEmitter<string>();
  markAs: string;
  showEdit: boolean = false;

  constructor(private service: DataRepository) {}

  ngOnInit(): void {
    this.markAs = this.todo.done ? 'Not Done' : 'Done';
  }

  onClickEdit() {
    this.sendId.emit(this.todo._id);
    this.showEdit = true;
  }

  onClickDelete(id) {
    this.service.deleteTodo(id);
  }

  onClickDone() {
    this.todo.done = !this.todo.done;
    this.service.addOrUpdateTodo(this.todo);
  }

  toggleShowEdit(args: boolean) {
    this.showEdit = args;
  }

  calcStyle() {
    let style = {
      backgroundColor:
        this.index % 2 == 1 ? 'rgb(27, 124, 141)' : 'rgb(91, 214, 236)',
      color: 'white',
    };
    return style;
  }
}
