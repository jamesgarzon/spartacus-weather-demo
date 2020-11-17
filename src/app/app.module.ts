import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import {WeatherModule} from './features/weather/weather.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://spartacus-training.eastus.cloudapp.azure.com:8443',
          prefix: '/occ/v2/'
        }
      },
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['electronics-spa']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '2.1'
      }
    }),
    BrowserTransferStateModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
