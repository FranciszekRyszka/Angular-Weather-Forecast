import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {WeatherServService} from "./weather-serv.service";
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
