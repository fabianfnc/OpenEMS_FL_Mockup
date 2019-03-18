import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'overview', loadChildren: './overview/overview.module#OverviewPageModule' },
  { path: 'help-modal', loadChildren: './shared/help-modal/help-modal.module#HelpModalPageModule' },
  { path: 'about-modal', loadChildren: './shared/about-modal/about-modal.module#AboutModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
