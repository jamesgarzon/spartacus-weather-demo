import { Component, OnInit } from '@angular/core';
import {WeatherAdapter} from '../adapters/weather.adapter';
import {Observable} from 'rxjs';
import {Weather} from '../models/Weather';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {

  weather$: Observable<Weather> = this.weatherAdapter.getWeather();

  constructor( private weatherAdapter: WeatherAdapter) { }

  ngOnInit(): void {
  }

}