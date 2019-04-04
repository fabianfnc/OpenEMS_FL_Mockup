import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetupFEHLERPage } from './setup-fehler.page';

const routes: Routes = [
  {
    path: '',
    component: SetupFEHLERPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetupFEHLERPage]
})
export class SetupFEHLERPageModule {}
