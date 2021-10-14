import { Component, Input, OnInit } from '@angular/core';
import { TableModel } from '@app/shared/tables/table/table.component';

@Component({
  selector: 'app-table-generic',
  templateUrl: './table-generic.component.html',
  styleUrls: ['./table-generic.component.scss']
})
export class TableGenericComponent implements OnInit {
  @Input('table') table: TableModel = {
    columns: [
     
    ],
    data: [
   
    ],
    actions: [
    
    ]
  }
  constructor() { }
  actionTable(event?: any) {
    console.log(event)
  }
  ngOnInit(): void {
  }

}
