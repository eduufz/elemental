import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  transactionThreshold = 50.0
  color = 'ion-color-danger';
  videoElement = null;
  display = 'show';
  displayVideo = 'hide';

  currentRank = Math.floor(Math.random() * 22) + 1 ;
  nextRank = this.currentRank + 1;

  userData = {
    "name":"Elder Bol",
    "rank": {
      "level": this.currentRank,
      "image": `../assets/icon/ranks/rank${this.currentRank}.svg`
    },
    "nextRank": {
      "level": this.nextRank,
      "image": `../assets/icon/ranks/rank${this.nextRank}.svg`
    },
    "wallet": 31.24,
    "points": 591
  }

  constructor(public loadingController: LoadingController, private router: Router, public toastController: ToastController) {}

  async presentLoading() {
		const loading = await this.loadingController.create({
			spinner: 'dots',
			message: 'Espera...',
			duration: 1000
		});
		await loading.present();

		const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
    
    this.displayVideo = 'show';
    this.videoElement.load();
    this.videoElement.requestFullscreen();
    this.videoElement.play();
  }
  
  removeAd() {
    this.displayVideo = 'hide';
    document.exitFullscreen();

    this.transaccion();
  }

  video(e) {
    this.videoElement = e.srcElement;
  }

  async transaccion() {
		const loading = await this.loadingController.create({
			spinner: 'dots',
			message: 'Procesando transacción...',
			duration: 3000
		});
		await loading.present();

		const { role, data } = await loading.onDidDismiss();
    
    let transcation_money = parseFloat((Math.random()*0.5).toFixed(2));
    this.userData.wallet = this.userData.wallet + transcation_money;
    
    this.moneyToast(transcation_money);

    if(Math.random()>0.8) {
      let points = Math.floor(Math.random() * 50) + 1;
      this.userData.points = this.userData.points + points;
      this.pointsToast(points);
    }
  }

  async moneyToast(money) {
    const toast = await this.toastController.create({
      message: `Se han ingresado ${money} € a tu cartera!`,
      duration: 5000,
      position: 'top',
      showCloseButton: true
    });
    toast.present();
  }

  async pointsToast(points) {
    const toast = await this.toastController.create({
      message: `Enhorabuena! Has conseguido ${points} puntos.`,
      duration: 5000,
      position: 'top',
      showCloseButton: true
    });
    toast.present();
  }
}
