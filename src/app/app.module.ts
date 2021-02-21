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
import { RegistrationComponent } from './webapp/admin/registration/registration.component';
import { RegistrationReuseableComponent } from './webapp/reusable/registration-reuseable/registration-reuseable.component';
import { CandidatesReuseableComponent } from './webapp/reusable/candidates-reuseable/candidates-reuseable.component';
import { CandidatesComponent } from './webapp/admin/candidates/candidates.component';
import { VoteTotal2021Component } from './webapp/admin/vote-total2021/vote-total2021.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    PageNotFoundComponent,
    SelfRegistrationComponent,
    SelectCandidatesComponent,
    ConfirmationComponent,
    RegistrationComponent,
    RegistrationReuseableComponent,
    CandidatesReuseableComponent,
    CandidatesComponent,
    VoteTotal2021Component
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
