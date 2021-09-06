import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss']
})
export class ForecastWeatherComponent implements OnInit {
  @Input() keyword:number | undefined;
  data: any = [];
  cityName!: string;
  
  constructor(
    private weather: WeatherService
  ) { 
    this.getCityForecast(this.keyword);
  }

  ngOnInit(): void {
    this.weather.keywordChange.subscribe((keyword: any) => {
      this.getCityForecast(keyword);
    });
  }

  getCityForecast(cityId: any){
    this.weather.getCityForecast(cityId).subscribe((resp: any) => {
      this.cityName = resp?.city?.name;
      let res = resp.list;
      if(Array.isArray(res)) {
        this.data = res.filter(res =>new Date(res.dt_txt).getHours() == 9);
     }
    },(err: any) => {
      console.log(err);
    });
  }

  ngOnDestroy() {
    this.weather.keywordChange.unsubscribe();
  }

}
