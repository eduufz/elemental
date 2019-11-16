import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NavController, AlertController, LoadingController } from '@ionic/angular';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	isLoggedIn = false;
	registerCredentials = { username: '', password: '' };
	constructor(private router: Router, private auth: AuthService, public alertController: AlertController, public loadingController: LoadingController) { }

	ngOnInit() {
		console.log("Login init");
	}

	async signIn() {
		await this.presentLoading()

		this.auth.login(this.registerCredentials).subscribe(allowed => {
			if (allowed) {
				this.router.navigate(['/home'])
			} else {
				this.showError("Access Denied");
			}
		},
		error => {
			this.showError(error);
		});

		//console.log(registerCredentials.username, registerCredentials.password);
		//this.router.navigate(['/home'])
		
	}

	async presentLoading() {
		const loading = await this.loadingController.create({
			spinner: 'dots',
			message: 'Espera...',
			duration: 1000,
		});
		await loading.present();

		const { role, data } = await loading.onDidDismiss();

		console.log('Loading dismissed!');
	}

	async showError(text) {
		const alert = await this.alertController.create({
			message: text,
			buttons: ['OK']
		});

		await alert.present();
	}


}
