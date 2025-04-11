import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const translationProviders: any = TranslateModule.forRoot({
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: httpTranslateLoader,
    deps: [HttpClient],
  },
});
