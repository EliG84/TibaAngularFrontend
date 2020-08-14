import { Component, OnInit } from '@angular/core';
import { DataRepository } from '../model/repository.service';

@Component({
  selector: 'todos-nav',
  templateUrl: './todos.nav.component.html',
  styleUrls: ['./todos.nav.component.scss'],
})
export class TodosNavComponent implements OnInit {
  searchInput: string;
  sortByInput: string;
  defaulSelected = 'Sort By';
  constructor(private service: DataRepository) {}

  onChangeSort() {
    this.service.sortTodos(this.sortByInput, true);
  }

  onInputSearch() {
    if (!this.searchInput) return this.service.getAllTodos();
    this.service.searchTodos(this.searchInput);
  }

  ngOnInit(): void {}
}
