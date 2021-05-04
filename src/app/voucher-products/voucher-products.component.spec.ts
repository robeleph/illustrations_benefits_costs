import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherProductsComponent } from './voucher-products.component';

describe('VoucherProductsComponent', () => {
  let component: VoucherProductsComponent;
  let fixture: ComponentFixture<VoucherProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
