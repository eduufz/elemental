import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
	position: number;
	name: string;
	points: number;
	symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{ position: 1, name: 'Hydrogen', points: 10193, symbol: '1' },
	{ position: 2, name: 'Helium', points: 9137, symbol: '2' },
	{ position: 3, name: 'Lithium', points: 8890, symbol: '3' },
	{ position: 4, name: 'Beryllium', points: 8875, symbol: '4' },
	{ position: 5, name: 'Boron', points: 5859, symbol: '5' },
	{ position: 6, name: 'Carbon', points: 5100, symbol: '7' },
	{ position: 7, name: 'Nitrogen', points: 4012, symbol: '8' },
	{ position: 8, name: 'Oxygen', points: 2988, symbol: '9' },
	{ position: 9, name: 'Fluorine', points: 2872, symbol: '10' },
	{ position: 10, name: 'Neon', points: 2019, symbol: '13' },
];


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

	displayedColumns: string[] = ['position', 'symbol', 'name', 'points'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);

	@ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor() { }

  ngOnInit() {
	  this.dataSource.sort = this.sort;
  }

}
