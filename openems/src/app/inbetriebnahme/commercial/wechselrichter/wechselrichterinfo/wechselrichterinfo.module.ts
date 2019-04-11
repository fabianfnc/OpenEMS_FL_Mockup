import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WechselrichterinfoPage } from './wechselrichterinfo.page';

const routes: Routes = [
  {
    path: '',
    component: WechselrichterinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WechselrichterinfoPage]
})
export class WechselrichterinfoPageModuleC {}
