import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
	items = [
		{
			"src": "../assets/icon/gift-cards/amazon10.png",
			"text": "Amazon gifcard",
			"price": "1000"
		},
		{
			"src": "../assets/icon/gift-cards/googleplay50.jpg",
			"text": "Google Play gifcard",
			"price": "5000"
		},
		{
			"src": "../assets/icon/gift-cards/googleplay.png",
			"text": "Google Play gifcard",
			"price": "2000"
		},
		{
			"src": "../assets/icon/gift-cards/nintendo12.png",
			"text": "Nintendo gifcard",
			"price": "1200"
		},
		{
			"src": "../assets/icon/gift-cards/psn12.jpg",
			"text": "PSN gifcard",
			"price": "1200"
		},
		{
			"src": "../assets/icon/gift-cards/spotify.png",
			"text": "Spotify gifcard",
			"price": "3000"
		},
		{
			"src": "../assets/icon/gift-cards/xboxlive1.png",
			"text": "Xbox gifcard",
			"price": "3200"
		}
	]
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
