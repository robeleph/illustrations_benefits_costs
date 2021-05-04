import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeLeasingComponent } from './bike-leasing/bike-leasing.component';
import { VacationDaysComponent } from './vacation-days/vacation-days.component';
import { InsuranceProductsComponent } from './insurance-products/insurance-products.component';
import { VoucherProductsComponent } from './voucher-products/voucher-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeLeasingComponent,
    VacationDaysComponent,
    InsuranceProductsComponent,
    VoucherProductsComponent,
    NavbarComponent,
    SliderComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
