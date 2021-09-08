import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { Fqa1Component } from './fqa1/fqa1.component';
import { Fqa2Component } from './fqa2/fqa2.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ChartComponent } from './chart/chart.component';
import { FormsModule } from '@angular/forms';
import { ApointmentComponent } from './apointment/apointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
        HomeComponent,
        Fqa1Component,
        Fqa2Component,
        ContactComponent,
        AboutComponent,
        ChartComponent,
        ApointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
