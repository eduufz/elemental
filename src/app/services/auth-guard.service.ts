import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

	constructor(private router: Router, private auth: AuthService) { }

	canActivate(route: ActivatedRouteSnapshot): boolean {
		console.log("Rutas", route);

		let authInfo = {
			authenticated: this.auth.isLoggedIn
		};

		if (!authInfo.authenticated) {
			this.router.navigate(["/login"]);
			return false;
		}

		return true;
	}

}
