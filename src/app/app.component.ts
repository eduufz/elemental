import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  rootPage: any = 'LoginPage';
  public appPages = [
    {
      title: 'Página principal',
      url: '/home',
      icon: 'home'
    },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    {
      title: 'Tabla de Clasificaciones',
      url: '/leaderboards',
      icon: 'podium'
    },
    {
      title: 'Tienda',
      url: '/shop',
      icon: 'cart'
    },
    {
      title: 'Metas',
      url: '/goals',
      icon: 'locate'
    },
    {
      title: 'Quiero donar',
      url: '/donate',
      icon: 'heart'
    },
    {
      title: 'Fundaciones',
      url: '/institutions',
      icon: 'globe'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
 
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
