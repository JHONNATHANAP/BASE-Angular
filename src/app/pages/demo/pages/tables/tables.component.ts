import { Component, OnInit } from '@angular/core';
import { TableModel } from '@app/shared/tables/table/table.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  table:TableModel={
    columns: [
      {
        columnDef: 'position',
        header: 'No.'
      },
      {
        columnDef: 'name',
        header: 'Name'
      },
      {
        columnDef: 'weight',
        header: 'Weight'
      },
      {
        columnDef: 'symbol',
        header: 'Symbol'
      }
    ],
    data:[
      {position: 10, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 20, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 30, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 40, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 50, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 60, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 70, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 80, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 90, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 100, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
