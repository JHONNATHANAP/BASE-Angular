import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output('action') action = new EventEmitter<any>();
  constructor() { }
  actionTable(event?: string,data?:any) {   
    this.action.emit({event:event,item:data});
  }
  ngOnInit(): void {
  }

}
