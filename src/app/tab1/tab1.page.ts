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
	{ position: 1, name: 'Hydrogen', points: 1.0079, symbol: '1' },
	{ position: 2, name: 'Helium', points: 4.0026, symbol: '2' },
	{ position: 3, name: 'Lithium', points: 6.941, symbol: '3' },
	{ position: 4, name: 'Beryllium', points: 9.0122, symbol: '4' },
	{ position: 5, name: 'Boron', points: 10.811, symbol: '5' },
	{ position: 6, name: 'Carbon', points: 12.0107, symbol: '7' },
	{ position: 7, name: 'Nitrogen', points: 14.0067, symbol: '8' },
	{ position: 8, name: 'Oxygen', points: 15.9994, symbol: '9' },
	{ position: 9, name: 'Fluorine', points: 18.9984, symbol: '10' },
	{ position: 10, name: 'Neon', points: 20.1797, symbol: '13' },
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
