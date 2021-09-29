import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
export type ButtonType = 'button' | 'submit';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type: ButtonType;
  @Input() class: string="";
  @Output() onClick = new EventEmitter<MouseEvent>();
  constructor() {
    this.type = 'button';
  }

  ngOnInit(): void {}

  private propagateClick: any = () => {};
  emitClick(event: MouseEvent): void{
    this.propagateClick();
    this.onClick.emit();
  }
}
