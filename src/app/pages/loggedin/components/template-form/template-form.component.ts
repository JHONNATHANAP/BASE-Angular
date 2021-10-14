import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  @Input('controls') controls!: any[];
  @Input('class') class: string="w-100";
  @Output('onSubmit') submit = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(event?: any) {
    this.submit.emit(event);
  }

}
