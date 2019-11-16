import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  videoElement = '';
  displayVideo = 'hide';

  currentRank = Math.floor(Math.random() * 22) + 1 ;
  nextRank = this.currentRank + 1;

  userData = {
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

  constructor(public loadingController: LoadingController, private router: Router) {}

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
  }

  video(e) {
    this.videoElement = e.srcElement;
  }
}
