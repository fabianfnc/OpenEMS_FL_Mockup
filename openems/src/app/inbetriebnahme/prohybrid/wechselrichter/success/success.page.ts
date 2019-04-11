import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(private loadingController: LoadingController, public router: Router) { }

  loadingSpinner: boolean = true;

  ngOnInit() {
  }

  async presentLoading() {
    if (this.loadingSpinner){
    const loading = await this.loadingController.create({
      message: 'Internet Prüfung..',
      duration: 1000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }
    this.router.navigate(['/ibn/prohybrid/protocol/error'])
  
}

}
