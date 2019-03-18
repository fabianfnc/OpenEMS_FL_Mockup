import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ProfileModalPage } from './shared/profile-modal/profile-modal.page';
import { HelpModalPage } from './shared/help-modal/help-modal.page';
import { AboutModalPage } from './shared/about-modal/about-modal.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    public modalController: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async presentModalProfile() {
    const modal = await this.modalController.create({
      component: ProfileModalPage,
    });
    return await modal.present();
  }

  async presentModalAbout() {
    const modal = await this.modalController.create({
      component: AboutModalPage,
    });
    return await modal.present();
  }

  async presentModalHelp() {
    const modal = await this.modalController.create({
      component: HelpModalPage,
    });
    return await modal.present();
  }
}