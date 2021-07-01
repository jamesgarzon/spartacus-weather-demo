import {Injectable} from '@angular/core';
import {Converter} from '@spartacus/core';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class WeatherSerializer implements Converter<Position, any> {

  convert(source: Position, target?: any): any {
    const {latitude, longitude} = source.coords;
    target = {
      lat: String(latitude),
      lon: String(longitude),
      units: environment.weatherAPI.unit,
      appid: environment.weatherAPI.apiKey
    };

    return target;
  }
}
