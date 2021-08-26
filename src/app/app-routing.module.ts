import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifyComponent } from './modify/modify.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'modify',
    component: ModifyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
