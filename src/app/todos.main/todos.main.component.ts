import { Component, OnInit, OnChanges } from '@angular/core';
import { DataRepository } from 'src/app/model/repository.service';
import { Todo } from '../model/todo.model';
import calcDays from '../helper/helper.functions.js';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'todos-main',
  templateUrl: './todos.main.component.html',
  styleUrls: ['./todos.main.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      state('true', style({ opacity: 1, color: 'red' })),
      state('void', style({ opacity: 0, color: 'blue' })),
      transition(':enter', animate('500ms ease-in-out')),
      transition(':leave', animate('500ms ease-in-out')),
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class TodosMainComponent implements OnInit {
  selectedTodo: Todo;
  showCompleted: boolean = false;
  searching: boolean = false;

  constructor(private service: DataRepository) {}

  ngOnInit(): void {
    this.todos.map((item) => {
      item.daysLeft = calcDays(item.dueDate);
    });
    this.completed.map((item) => {
      item.daysLeft = calcDays(item.dueDate);
    });
  }

  get todos(): Todo[] {
    return this.service.getTodos();
  }

  get completed(): Todo[] {
    return this.service.getCompleted();
  }

  getSignleTodo(id: string) {
    this.selectedTodo = this.service.getById(id);
    this.selectedTodo.date = new Date(this.selectedTodo.dueDate)
      .toISOString()
      .slice(0, 10);
  }

  toggleComplete(args: boolean) {
    this.showCompleted = args;
  }

  toggleSearching(args: boolean) {
    this.searching = args;
  }
}
