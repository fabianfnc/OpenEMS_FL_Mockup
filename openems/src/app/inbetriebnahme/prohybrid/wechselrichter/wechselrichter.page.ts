import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WechselrichterinfoPage } from './wechselrichterinfo/wechselrichterinfo.page';

@Component({
  selector: 'app-wechselrichter',
  templateUrl: './wechselrichter.page.html',
  styleUrls: ['./wechselrichter.page.scss'],
})
export class WechselrichterPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async presentModalInfo() {
    const modal = await this.modalController.create({
      component: WechselrichterinfoPage
    });
    return await modal.present();
  }

}
