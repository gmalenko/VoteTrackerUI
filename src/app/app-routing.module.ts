import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from 'src/app/webapp/default/default.component'
import { PageNotFoundComponent } from 'src/app/webapp/page-not-found/page-not-found.component';
import { RegistrationComponent } from 'src/app/webapp/admin/registration/registration.component';
import { CandidatesComponent } from './webapp/admin/candidates/candidates.component';
import { VoteTotal2021Component } from './webapp/admin/vote-total2021/vote-total2021.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    data: {

    }
  },
  {
    path: 'admin/registration',
    component: RegistrationComponent,
    data: {

    }
  },
  {
    path: 'admin/candidate',
    component: CandidatesComponent,
    data: {

    }
  },
  {
    path: 'admin/votetotal2021',
    component: VoteTotal2021Component,
    data: {

    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {

    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
