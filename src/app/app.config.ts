import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { CountryInfoService } from './country-info.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide: CountryInfoService}
  ]
};
