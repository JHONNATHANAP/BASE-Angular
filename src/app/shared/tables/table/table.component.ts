import { Component, Input, OnInit } from '@angular/core';

export interface TableModel {
  data: any[];
  columns: column[];
  actions?:action[]

}
export interface column {
  columnDef: string;
  header: string;
  columnFilter?:string;
}
export interface action {
  title:string;
  event:string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() table!: TableModel;

  dataSource!: any[];
  displayedColumns!: string[];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.table.data
    this.displayedColumns = this.table.columns.map(c => c.columnDef);
    //console.log(this.table)
  }

}
