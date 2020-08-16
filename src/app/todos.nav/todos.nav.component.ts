import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataRepository } from '../model/repository.service';

@Component({
  selector: 'todos-nav',
  templateUrl: './todos.nav.component.html',
  styleUrls: ['./todos.nav.component.scss'],
})
export class TodosNavComponent implements OnInit {
  @Output() isSearching: EventEmitter<boolean> = new EventEmitter<boolean>();
  searchInput: string;
  sortByInput: string;

  constructor(private service: DataRepository) {}

  onChangeSort() {
    this.service.sortTodos(this.sortByInput, true);
  }

  onInputSearch() {
    this.isSearching.emit(true);
    if (!this.searchInput) {
      this.isSearching.emit(false);
      return this.service.getAllTodos();
    }
    this.service.searchTodos(this.searchInput);
  }

  ngOnInit(): void {}
}
