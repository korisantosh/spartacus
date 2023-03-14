import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, I18nConfig, I18nModule } from '@spartacus/core';
import { customTranslationChunksConfig } from 'src/assets/translations/translation-chunks-config';
import { customTranslations } from 'src/assets/translations/translations';
import { translationChunksConfig } from '@spartacus/assets';

const translationOverwrites = {
  en: {
    // lang
    common: {
      // chunk
      searchBox: {
        // keys (nested)
        placeholder: "Searchin'...",
      },
    },
  },
};

const GERMAN_TRANSLATIONS = {
  de: {
    common: {
      searchBox: {
        placeholder: 'Suchen sie hier',
      },
    },
  },
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Translations overwrites - basic example

    // ConfigModule.withConfig({
    //   i18n: {
    //     resources: translationOverwrites,
    //   },
    // } as I18nConfig),

    // German translations - basic example

    // ConfigModule.withConfig({
    //   i18n: {
    //     resources: GERMAN_TRANSLATIONS
    //   }
    // } as I18nConfig),

    // Import cxTranslate pipe
    I18nModule,

    /**
     * https://github.com/SAP/spartacus/issues/3625
     * If customer imports static translations from @spartacus/assets in TS,
     * it should work OOTB after bumping Spartacus.
     */
    // ConfigModule.withConfig({
    //   i18n: {
    //     resources: customTranslations,
    //     chunks: customTranslationChunksConfig,
    //   },
    // } as I18nConfig),

    /**
     * https://github.com/SAP/spartacus/issues/3625
     * JSONs for lazy loading,
     * he needs to copy-merge our new released JSONs into his JSONs to fill missing values
     * (but not modify existing - in case some were already customized).
     */
    ConfigModule.withConfig({
      i18n: {
        backend: {
          loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
        },
        chunks: {
          customBanner: ['customCommon'],
        },
      },
    } as I18nConfig),
  ],
})
export class InternationalizationModule {}
