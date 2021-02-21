import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './webapp/default/default.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './webapp/page-not-found/page-not-found.component';
import { SelfRegistrationComponent } from './webapp/reusable/self-registration/self-registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectCandidatesComponent } from './webapp/reusable/select-candidates/select-candidates.component';
import { ConfirmationComponent } from './webapp/reusable/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    PageNotFoundComponent,
    SelfRegistrationComponent,
    SelectCandidatesComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
