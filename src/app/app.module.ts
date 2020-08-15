import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';

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
    MatInputModule,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ApiDataSource, DataRepository],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
