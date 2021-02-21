import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './webapp/default/default.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './webapp/page-not-found/page-not-found.component';
import { SelfRegistrationComponent } from './webapp/reusable/self-registration/self-registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    PageNotFoundComponent,
    SelfRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
