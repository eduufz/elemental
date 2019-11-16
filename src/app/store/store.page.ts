import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
