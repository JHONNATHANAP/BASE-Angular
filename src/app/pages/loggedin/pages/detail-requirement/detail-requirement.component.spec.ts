import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRequirementComponent } from './detail-requirement.component';

describe('DetailRequirementComponent', () => {
  let component: DetailRequirementComponent;
  let fixture: ComponentFixture<DetailRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRequirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
