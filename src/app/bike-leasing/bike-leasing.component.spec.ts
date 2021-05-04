import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeLeasingComponent } from './bike-leasing.component';

describe('BikeLeasingComponent', () => {
  let component: BikeLeasingComponent;
  let fixture: ComponentFixture<BikeLeasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeLeasingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeLeasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
