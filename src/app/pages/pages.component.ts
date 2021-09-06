import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  keyword: number | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  send(keyword: number){
    this.weatherService.keywordChange.next(keyword);
  }

}
