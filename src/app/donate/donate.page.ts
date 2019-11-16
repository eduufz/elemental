import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {
  ngOnInit() {
  }

  constructor(public loadingController: LoadingController, public toastController: ToastController) { }

  async presentLoading() {
		const loading = await this.loadingController.create({
			spinner: 'dots',
			message: 'Procesando transacción...',
			duration: 3000
		});
		await loading.present();

    const { role, data } = await loading.onDidDismiss();
    
    this.moneyToast();
  }

  async moneyToast() {
    const toast = await this.toastController.create({
      message: `La transacción se ha realizado correctamente.`,
      duration: 5000,
      position: 'top',
      showCloseButton: true
    });
    toast.present();
  }
}
