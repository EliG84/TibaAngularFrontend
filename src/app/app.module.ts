import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { ApiDataSource } from './model/api.datasource';
import { DataRepository } from './model/repository.service';
import { TodosMainComponent } from './todos.main/todos.main.component';
import { TodosHeaderComponent } from './todos.header/todos.header.component';
import { TodosSingleComponent } from './todos.single/todos.single.component';
import { TodosEditComponent } from './todos.edit/todos.edit.component';
import { TodosNavComponent } from './todos.nav/todos.nav.component';
import { TodosAddComponent } from './todos.add/todos.add.component';
import { TodoNameFormaterPipe } from './helper/todoFormater.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosMainComponent,
    TodosHeaderComponent,
    TodosSingleComponent,
    TodosEditComponent,
    TodosNavComponent,
    TodosAddComponent,
    TodoNameFormaterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [ApiDataSource, DataRepository],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
