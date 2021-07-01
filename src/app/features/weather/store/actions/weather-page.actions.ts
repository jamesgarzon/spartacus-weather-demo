import {createAction} from '@ngrx/store';

const LOAD_WEATHER = '[Weather] Load Weather Data';

export const loadWeather = createAction(LOAD_WEATHER);
