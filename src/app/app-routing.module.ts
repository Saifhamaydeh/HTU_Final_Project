import { ApointmentComponent } from './apointment/apointment.component';
import { ChartComponent } from './chart/chart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Fqa2Component } from './fqa2/fqa2.component';
import { Fqa1Component } from './fqa1/fqa1.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'admin', component: AdminComponent},
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'fqa1' , component: Fqa1Component},
  {path:'fqa2' , component: Fqa2Component},
  {path:'about' , component: AboutComponent},
  {path:'apointment' , component: ApointmentComponent},
  {path:'chart' , component: ChartComponent},
  {path:'contact' , component: ContactComponent}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
