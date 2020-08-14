import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiDataSource } from './model/api.datasource';
import { DataRepository } from './model/repository.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApiDataSource, DataRepository],
  bootstrap: [AppComponent],
})
export class AppModule {}
