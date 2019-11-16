import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export class User {
	name: string;
	username: string;

	constructor(name: string, username: string) {
		this.name = name;
		this.username = username;
	}
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
	public isLoggedIn: boolean = false;
	currentUser: User;

  constructor() {
   }

	public login(credentials) {
		if (credentials.email === null || credentials.password === null) {
			return Observable.throw("Please insert credentials");
		} else {
			return Observable.create(observer => {
				this.isLoggedIn = true;

				console.log("Logeado?: ", this.isLoggedIn);
				// At this point make a request to your backend to make a real check!
				let access = (credentials.password === "123" && credentials.username === "eabol");
				this.currentUser = new User('eabol', 'eabol@bestteameaver.es');
				observer.next(access);
				observer.complete();
			});
		}
	}

	public getUserInfo(): User {
		return this.currentUser;
	}

	public logout() {
		return Observable.create(observer => {
			this.currentUser = null;
			observer.next(true);
			observer.complete();
		});
	}

}
