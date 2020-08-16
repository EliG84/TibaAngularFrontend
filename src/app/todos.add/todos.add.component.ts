import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Todo } from '../model/todo.model';
import caldDays from '../helper/helper.functions';
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
export class TodosAddComponent implements OnInit, OnChanges {
  todo: Todo = {};
  @Input() showDone: boolean;
  @Output() toggleDone: EventEmitter<boolean> = new EventEmitter<boolean>();
  doneBtnText: string;

  constructor(private service: DataRepository) {}

  ngOnInit(): void {
    this.doneBtnText = this.showDone ? 'Hide Done' : 'Show Done';
  }

  ngOnChanges() {
    this.doneBtnText = this.showDone ? 'Hide Done' : 'Show Done';
  }

  onClickAdd() {
    this.todo._id = null;
    this.todo.created = new Date().toLocaleString().slice(0, 9);
    this.todo.daysLeft = caldDays(this.todo.dueDate);
    this.service.addOrUpdateTodo(this.todo);
    this.todo = {};
  }

  onClickDone() {
    this.toggleDone.emit(!this.showDone);
  }
}
