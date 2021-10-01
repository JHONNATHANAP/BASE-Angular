import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoMailboxComponent } from './to-do-mailbox.component';

describe('ToDoMailboxComponent', () => {
  let component: ToDoMailboxComponent;
  let fixture: ComponentFixture<ToDoMailboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoMailboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoMailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
