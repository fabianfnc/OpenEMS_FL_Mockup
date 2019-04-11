import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-wechselrichterinfo',
  templateUrl: './wechselrichterinfo.page.html',
  styleUrls: ['./wechselrichterinfo.page.scss'],
})
export class WechselrichterinfoPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

}
