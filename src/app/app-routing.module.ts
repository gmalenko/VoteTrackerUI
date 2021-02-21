import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from 'src/app/webapp/default/default.component'
import { PageNotFoundComponent } from 'src/app/webapp/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    data: {

    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data:{
      
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
