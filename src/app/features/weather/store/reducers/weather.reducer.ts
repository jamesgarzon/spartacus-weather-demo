import {WeatherState} from '../weather-state';
import {createReducer, on} from '@ngrx/store';
import {WeatherApiActions, WeatherPageActions} from '../actions';

const initialState: WeatherState = {
  geolocationPosition: null,
  currentWeather: null
};

export const weatherReducer = createReducer<WeatherState>(
  initialState,
  on(WeatherPageActions.loadWeather, state => {
   return {
    ...state,
    currentWeather: {
      ...state.currentWeather,
      status: {
        success: false,
        loading: true,
        error: false
      }
    }
   };
  }),
  on(WeatherApiActions.loadWeatherSuccess, (state, action): WeatherState => {
    return {
      ...state,
      currentWeather: {
        ...action.weather,
        status: {
          success: true,
          error: false,
          loading: false
        }
      }
    };
  }),
  on(WeatherApiActions.loadWeatherFail, (state, action): WeatherState => {
    return {
      ...state,
      currentWeather: {
        ...state.currentWeather,
        status: {
          success: false,
          error: true,
          loading: false
        }
      }
    };
  })
);
