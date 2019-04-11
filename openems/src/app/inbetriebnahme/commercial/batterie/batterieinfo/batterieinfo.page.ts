import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-batterieinfo',
  templateUrl: './batterieinfo.page.html',
  styleUrls: ['./batterieinfo.page.scss'],
})
export class BatterieinfoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  cancel() {
    this.modalCtrl.dismiss();
  }
}

