import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetupErfolgreich1Page } from './setup-erfolgreich1.page';

const routes: Routes = [
  {
    path: '',
    component: SetupErfolgreich1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetupErfolgreich1Page]
})
export class SetupErfolgreich1PageModule {}
