import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";
import { StorefrontlibModule } from './storefrontlib/storefrontlib.module';

@NgModule({
  declarations: [],
  imports: [
    StorefrontlibModule
  ],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002/',
          prefix: '/occ/v2/',
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        language: ['en'],
        baseSite: ['electronics-spa', 'powertools-spa', 'apparel-uk-spa'],
        currency: ['USD', 'GBP'],
        urlParameters: ['baseSite', 'language', 'currency'],
        theme: ['santorini'],
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3',
      },
    }),
  ],
})
export class SpartacusConfigurationModule { }
