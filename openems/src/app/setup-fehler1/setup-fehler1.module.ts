import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetupFehler1Page } from './setup-fehler1.page';

const routes: Routes = [
  {
    path: '',
    component: SetupFehler1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetupFehler1Page]
})
export class SetupFehler1PageModule {}
