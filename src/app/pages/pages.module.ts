import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FooterComponent } from '../include/footer/footer.component';
import { HeaderComponent } from '../include/header/header.component';
import { CitiesWeatherComponent } from './cities-weather/cities-weather.component';
import { ForecastWeatherComponent } from './forecast-weather/forecast-weather.component';

@NgModule({
  declarations: [
    PagesComponent,
    FooterComponent,
    HeaderComponent,
    CitiesWeatherComponent,
    ForecastWeatherComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
