import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { NavheaderComponent } from './componets/navheader/navheader.component';
import { HomeComponent } from './componets/home/home.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { EnterComponent } from './componets/enter/enter.component';
import { AdvertComponent } from './componets/advert/advert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    HomeComponent,
    DashboardComponent,
    EnterComponent,
    AdvertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
