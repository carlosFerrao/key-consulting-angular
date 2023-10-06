import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { RequestCardComponent } from './request-card/request-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewRequestFormComponent } from './new-request-form/new-request-form.component';
import { AngularMaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RequestsService } from 'src/services/requests.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RequestCardComponent,
    NewRequestFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
