import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
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
      url: '/donations',
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
    private statusBar: StatusBar
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
