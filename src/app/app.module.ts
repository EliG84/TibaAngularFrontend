import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiDataSource } from './model/api.datasource';
import { DataRepository } from './model/repository.service';
import { TodosMainComponent } from './todos.main/todos.main.component';
import { TodosHeaderComponent } from './todos.header/todos.header.component';
import { TodosSingleComponent } from './todos.single/todos.single.component';
import { TodosEditComponent } from './todos.edit/todos.edit.component';
import { TodosCompleteComponent } from './todos.complete/todos.complete.component';
import { TodosNavComponent } from './todos.nav/todos.nav.component';
import { TodosAddComponent } from './todos.add/todos.add.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosMainComponent,
    TodosHeaderComponent,
    TodosSingleComponent,
    TodosEditComponent,
    TodosCompleteComponent,
    TodosNavComponent,
    TodosAddComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [ApiDataSource, DataRepository],
  bootstrap: [AppComponent],
})
export class AppModule {}
