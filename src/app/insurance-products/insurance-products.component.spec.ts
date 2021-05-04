import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceProductsComponent } from './insurance-products.component';

describe('InsuranceProductsComponent', () => {
  let component: InsuranceProductsComponent;
  let fixture: ComponentFixture<InsuranceProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
