import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { StarsComponent } from './components/stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ReviewListComponent,
    NavComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
