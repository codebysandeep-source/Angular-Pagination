import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// ngx-pagination for Pagination
import { NgxPaginationModule } from 'ngx-pagination';   //npm install ngx-pagination
// http for API
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule, //Pagination
    HttpClientModule //API
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
