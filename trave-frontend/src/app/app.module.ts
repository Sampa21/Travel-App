import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule for HTTP requests
import { AppComponent } from './app.component';  // Import the AppComponent
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,  // Import HttpClientModule to make HTTP calls
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap with the AppComponent
})
export class AppModule { }
