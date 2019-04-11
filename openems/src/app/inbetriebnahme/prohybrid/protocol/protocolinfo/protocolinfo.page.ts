import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-protocolinfo',
  templateUrl: './protocolinfo.page.html',
  styleUrls: ['./protocolinfo.page.scss'],
})
export class ProtocolinfoPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

}
