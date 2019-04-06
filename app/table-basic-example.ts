import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const column1 = [{RO:1234, vehicle:'nissan',description:['oil change', 'oxygen cylinder', 'Tyre Grip', 'Engine Repair'], time:[10,20,30,40]},
{RO:1234, vehicle:'nissan',description:['oil change', 'oxygen cylinder', 'Tyre Grip', 'Engine Repair'],time:[10,20,30,40]}] 

const columns = [{RO:1234, vehicle:'nissan', details:{f1:'oil change', f2: 'oxygen cylinder', f3: 'Tyre Grip', f4: 'Engine Repair'}, time:{t1:10, t2:20, t3:30, t4:40}},
{RO:1234, vehicle:'nissan', details:{f1:'oil change', f2: 'oxygen cylinder', f3: 'Tyre Grip', f4: 'Engine Repair'}, time:{t1:10, t2:20, t3:30, t4:40}}]

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  h = 300;
	w = 200;
	bdr = 5;
	clspn = 4;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = columns;
  columnsToDisplay = ['name', 'age'];
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */