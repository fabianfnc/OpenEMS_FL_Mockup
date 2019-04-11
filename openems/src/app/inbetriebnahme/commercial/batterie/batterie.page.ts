import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BatterieinfoPage } from './batterieinfo/batterieinfo.page';

@Component({
  selector: 'app-batterie',
  templateUrl: './batterie.page.html',
  styleUrls: ['./batterie.page.scss'],
})
export class BatteriePage implements OnInit {

  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }
  async presentModalInfo() {
    const modal = await this.modalController.create({
      component: BatterieinfoPage
    });
    return await modal.present();
  }
}
