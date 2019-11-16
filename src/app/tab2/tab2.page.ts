import { Component, OnInit, ViewChild } from '@angular/core';


import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
	position: number;
	name: string;
	amount: number;
	symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
	{ position: 1, name: 'Hydrogen', amount: 1011, symbol: '1' },
	{ position: 2, name: 'Helium', amount: 912, symbol: '2' },
	{ position: 3, name: 'Lithium', amount: 884, symbol: '3' },
	{ position: 4, name: 'Beryllium', amount: 880, symbol: '4' },
	{ position: 5, name: 'Boron', amount: 584, symbol: '5' },
	{ position: 6, name: 'Carbon', amount: 516, symbol: '7' },
	{ position: 7, name: 'Nitrogen', amount: 403, symbol: '8' },
	{ position: 8, name: 'Oxygen', amount: 293, symbol: '9' },
	{ position: 9, name: 'Fluorine', amount: 222, symbol: '10' },
	{ position: 10, name: 'Neon', amount: 209, symbol: '13' },
];



@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

	displayedColumns: string[] = ['position', 'symbol', 'name', 'amount'];
	dataSource = new MatTableDataSource(ELEMENT_DATA);

	@ViewChild(MatSort, { static: true }) sort: MatSort;


	constructor() { }

	ngOnInit() {
		this.dataSource.sort = this.sort;
	}

}
