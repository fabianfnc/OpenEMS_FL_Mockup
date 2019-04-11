import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProtocolinfoPage } from './protocolinfo/protocolinfo.page';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.page.html',
  styleUrls: ['./protocol.page.scss'],
})
export class ProtocolPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async presentModalInfo() {
    const modal = await this.modalController.create({
      component: ProtocolinfoPage
    });
    return await modal.present();
  }

}
