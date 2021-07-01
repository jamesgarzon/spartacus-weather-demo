import {InjectionToken} from '@angular/core';
import {Converter} from '@spartacus/core';
import {Weather} from '../models/Weather';

export const WEATHER_NORMALIZER = new InjectionToken<Converter<any, Weather>>(
  'WeatherNormalizer'
);

export const WEATHER_SERIALIZER = new InjectionToken<Converter<Position, any>>(
  'WeatherSerializer'
);
