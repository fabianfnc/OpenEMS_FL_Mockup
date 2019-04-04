import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'setup', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'overview', loadChildren: './overview/overview.module#OverviewPageModule' },
  { path: 'help-modal', loadChildren: './shared/help-modal/help-modal.module#HelpModalPageModule' },
  { path: 'about-modal', loadChildren: './shared/about-modal/about-modal.module#AboutModalPageModule' },
  { path: 'setup', loadChildren: './setup/setup.module#SetupPageModule' },  { path: 'setup-two', loadChildren: './setup-two/setup-two.module#SetupTwoPageModule' },
  { path: 'setup-three', loadChildren: './setup-three/setup-three.module#SetupThreePageModule' },
  { path: 'setup-fehler', loadChildren: './setup-fehler/setup-fehler.module#SetupFEHLERPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
