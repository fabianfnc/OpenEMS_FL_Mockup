import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BatterieinfoPage } from './batterieinfo.page';

const routes: Routes = [
  {
    path: '',
    component: BatterieinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BatterieinfoPage]
})
export class BatterieinfoPageModule {}
