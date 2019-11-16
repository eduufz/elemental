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

  color = 'ion-color-danger';
  videoElement = '';
  display = 'show';
  displayVideo = 'hide';
  autoplay = '';
  currentRank = 16;
  nextRank = this.currentRank + 1;

  userData = {
    "rank": {
      "level": this.currentRank,
      "image": `../assets/icon/ranks/rank${this.currentRank}.svg`
    },
    "nextRank": {
      "level": this.nextRank,
      "image": `../assets/icon/ranks/rank${this.nextRank}.svg`
    }
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
    
    this.display = 'hide';
    this.displayVideo = 'show';
    this.videoElement.play();
  }
  
  removeAd() {
    this.display = 'show';
    this.displayVideo = 'hide';
    this.color = 'ion-color-danger'
  }

  video(e) {
    this.videoElement = e.srcElement;
  }
}
