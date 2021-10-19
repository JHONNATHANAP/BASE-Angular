import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsWithResponseTimeComponent } from './documents-with-response-time.component';

describe('DocumentsWithResponseTimeComponent', () => {
  let component: DocumentsWithResponseTimeComponent;
  let fixture: ComponentFixture<DocumentsWithResponseTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsWithResponseTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsWithResponseTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
