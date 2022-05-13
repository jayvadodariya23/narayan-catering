import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WebsiteContentComponent } from './components/website-content/website-content.component';
import { AboutNarayanCateringComponent } from './components/website-content/about-narayan-catering/about-narayan-catering.component';
import { NarayanStarterComponent } from './components/website-content/narayan-starter/narayan-starter.component';
import { NarayanSpecialComponent } from './components/website-content/narayan-special/narayan-special.component';
import { NarayanCustomerCounterComponent } from './components/website-content/narayan-customer-counter/narayan-customer-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WebsiteContentComponent,
    AboutNarayanCateringComponent,
    NarayanStarterComponent,
    NarayanSpecialComponent,
    NarayanCustomerCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
