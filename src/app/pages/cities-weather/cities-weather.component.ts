import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-cities-weather',
  templateUrl: './cities-weather.component.html',
  styleUrls: ['./cities-weather.component.scss']
})
export class CitiesWeatherComponent implements OnInit {
  @Output() emitter:EventEmitter<number> = new EventEmitter<number>();

  resp: any = [];
  keyword: any;

  constructor(
    private weather: WeatherService
  ) { }

  ngOnInit(): void {
   this.fetchWeather();
  }

  fetchWeather(){
    this.weather.getWeather().subscribe((resp: any) => {
      this.resp = resp;
      this.keyword = resp[0].id;
    }, (err: any) => {
      console.log(err);
    });
  }

  emit(keyword: number){
    this.keyword = keyword;
    this.emitter.emit(keyword);
  }
  
}
