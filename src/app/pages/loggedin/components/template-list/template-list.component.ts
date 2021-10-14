import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableModel } from '@app/shared/tables/table/table.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {
  loading$ !: Observable<boolean | null>;

  @Input('controls') controls!: any[];
  @Input('table') table!: TableModel;
  @Output('onSubmit') submit = new EventEmitter<any>();
  @Output('action') action = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event?: any) {
    this.submit.emit(event);
  }

  onAction(event?: any) {
    this.action.emit(event);
  }

}
