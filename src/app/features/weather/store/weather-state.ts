import {Weather} from '../models/Weather';

export const WEATHER_FEATURE = 'weather';

export interface WeatherState {
  geolocationPosition: Position;
  currentWeather: Weather;
}
