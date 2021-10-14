import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGenericComponent } from './form-generic.component';

describe('FormFiltersComponent', () => {
  let component: FormGenericComponent;
  let fixture: ComponentFixture<FormGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
