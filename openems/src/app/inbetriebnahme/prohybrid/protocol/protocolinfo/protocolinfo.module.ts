import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProtocolinfoPage } from './protocolinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ProtocolinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProtocolinfoPage]
})
export class ProtocolinfoPageModule {}
