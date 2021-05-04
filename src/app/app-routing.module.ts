import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeLeasingComponent } from './bike-leasing/bike-leasing.component';
import { InsuranceProductsComponent } from './insurance-products/insurance-products.component';
import { VacationDaysComponent } from './vacation-days/vacation-days.component';
import { VoucherProductsComponent } from './voucher-products/voucher-products.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'bike-leasing', component: BikeLeasingComponent },
  { path: 'insurance-products', component: InsuranceProductsComponent },
  { path: 'vacation-days', component: VacationDaysComponent },
  { path: 'voucher-products', component: VoucherProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
