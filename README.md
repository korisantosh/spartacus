# Electronic Spa theme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## To run the project in local environment

1. Clone the repo branch : 

```bash
https://github.com/korisantosh/spartacus.git
```
2. Checkout to the latest branch :

```bash
git checkout electronic-spa
```

```bash
npm install
```

3. Start local server :  

```bash
yarn start
```

4. Storefront Url : 

```bash
http://localhost:4200/
```

---

## Branching strategy :

Branch name : `feature/<your-changes-name>`

## Folder structure : 

- __C:\\Projects\\spartacus__
   - [README.md](README.md)
   - [angular.json](angular.json)
   - [karma.conf.js](karma.conf.js)
   - [ngsw\-config.json](ngsw-config.json)
   - [node\_modules](node_modules)
   - [package\-lock.json](package-lock.json)
   - [package.json](package.json)
   - [server.ts](server.ts)
   - __src__
     - __app__
       - [app\-routing.module.ts](src/app/app-routing.module.ts)
       - [app.component.html](src/app/app.component.html)
       - [app.component.scss](src/app/app.component.scss)
       - [app.component.spec.ts](src/app/app.component.spec.ts)
       - [app.component.ts](src/app/app.component.ts)
       - [app.module.ts](src/app/app.module.ts)
       - [app.server.module.ts](src/app/app.server.module.ts)
       - __core__
         - __configuration__
           - [configuration.module.ts](src/app/core/configuration/configuration.module.ts)
         - [core.module.ts](src/app/core/core.module.ts)
       - __shared__
         - __cms\-components__
           - [cms\-components.module.ts](src/app/shared/cms-components/cms-components.module.ts)
           - __custom\-banner__
             - [custom\-banner.component.html](src/app/shared/cms-components/custom-banner/custom-banner.component.html)
             - [custom\-banner.component.scss](src/app/shared/cms-components/custom-banner/custom-banner.component.scss)
             - [custom\-banner.component.spec.ts](src/app/shared/cms-components/custom-banner/custom-banner.component.spec.ts)
             - [custom\-banner.component.ts](src/app/shared/cms-components/custom-banner/custom-banner.component.ts)
           - __custom\-carousel__
             - [custom\-carousel.component.html](src/app/shared/cms-components/custom-carousel/custom-carousel.component.html)
             - [custom\-carousel.component.scss](src/app/shared/cms-components/custom-carousel/custom-carousel.component.scss)
             - [custom\-carousel.component.spec.ts](src/app/shared/cms-components/custom-carousel/custom-carousel.component.spec.ts)
             - [custom\-carousel.component.ts](src/app/shared/cms-components/custom-carousel/custom-carousel.component.ts)
           - __custom\-outlets__
             - [custom\-outlets.component.html](src/app/shared/cms-components/custom-outlets/custom-outlets.component.html)
             - [custom\-outlets.component.scss](src/app/shared/cms-components/custom-outlets/custom-outlets.component.scss)
             - [custom\-outlets.component.spec.ts](src/app/shared/cms-components/custom-outlets/custom-outlets.component.spec.ts)
             - [custom\-outlets.component.ts](src/app/shared/cms-components/custom-outlets/custom-outlets.component.ts)
         - __configuration__
           - [configuration.module.ts](src/app/shared/configuration/configuration.module.ts)
           - __layout__
             - [layout.module.ts](src/app/shared/configuration/layout/layout.module.ts)
           - __media__
             - [media.module.ts](src/app/shared/configuration/media/media.module.ts)
         - __directives__
         - __internationalization__
           - [internationalization.module.ts](src/app/shared/internationalization/internationalization.module.ts)
         - __models__
           - [cms.model.ts](src/app/shared/models/cms.model.ts)
         - __pipes__
         - [shared.module.ts](src/app/shared/shared.module.ts)
       - __spartacus__
         - __features__
           - __asm__
             - [asm\-feature.module.ts](src/app/spartacus/features/asm/asm-feature.module.ts)
           - __cart__
             - [cart\-import\-export\-feature.module.ts](src/app/spartacus/features/cart/cart-import-export-feature.module.ts)
             - [cart\-quick\-order\-feature.module.ts](src/app/spartacus/features/cart/cart-quick-order-feature.module.ts)
             - [cart\-saved\-cart\-feature.module.ts](src/app/spartacus/features/cart/cart-saved-cart-feature.module.ts)
           - __checkout__
             - [checkout\-feature.module.ts](src/app/spartacus/features/checkout/checkout-feature.module.ts)
           - __order__
             - [order\-feature.module.ts](src/app/spartacus/features/order/order-feature.module.ts)
           - __product__
             - [product\-image\-zoom\-feature.module.ts](src/app/spartacus/features/product/product-image-zoom-feature.module.ts)
             - [product\-variants\-feature.module.ts](src/app/spartacus/features/product/product-variants-feature.module.ts)
           - __smartedit__
             - [smart\-edit\-feature.module.ts](src/app/spartacus/features/smartedit/smart-edit-feature.module.ts)
           - __storefinder__
             - [store\-finder\-feature.module.ts](src/app/spartacus/features/storefinder/store-finder-feature.module.ts)
           - __tracking__
             - [personalization\-feature.module.ts](src/app/spartacus/features/tracking/personalization-feature.module.ts)
           - __user__
             - [user\-feature.module.ts](src/app/spartacus/features/user/user-feature.module.ts)
         - [spartacus\-configuration.module.ts](src/app/spartacus/spartacus-configuration.module.ts)
         - [spartacus\-features.module.ts](src/app/spartacus/spartacus-features.module.ts)
         - [spartacus.module.ts](src/app/spartacus/spartacus.module.ts)
         - __storefrontlib__
           - __cms\-components__
             - [cms\-components.module.ts](src/app/spartacus/storefrontlib/cms-components/cms-components.module.ts)
             - __custom\-navigation__
               - __breadcrumbs__
                 - [breadcrumbs.component.html](src/app/spartacus/storefrontlib/cms-components/custom-navigation/breadcrumbs/breadcrumbs.component.html)
                 - [breadcrumbs.component.scss](src/app/spartacus/storefrontlib/cms-components/custom-navigation/breadcrumbs/breadcrumbs.component.scss)
                 - [breadcrumbs.component.spec.ts](src/app/spartacus/storefrontlib/cms-components/custom-navigation/breadcrumbs/breadcrumbs.component.spec.ts)
                 - [breadcrumbs.component.ts](src/app/spartacus/storefrontlib/cms-components/custom-navigation/breadcrumbs/breadcrumbs.component.ts)
               - [custom\-navigation.module.ts](src/app/spartacus/storefrontlib/cms-components/custom-navigation/custom-navigation.module.ts)
               - __footer\-copyright__
                 - [footer\-copyright.component.html](src/app/spartacus/storefrontlib/cms-components/custom-navigation/footer-copyright/footer-copyright.component.html)
                 - [footer\-copyright.component.scss](src/app/spartacus/storefrontlib/cms-components/custom-navigation/footer-copyright/footer-copyright.component.scss)
                 - [footer\-copyright.component.spec.ts](src/app/spartacus/storefrontlib/cms-components/custom-navigation/footer-copyright/footer-copyright.component.spec.ts)
                 - [footer\-copyright.component.ts](src/app/spartacus/storefrontlib/cms-components/custom-navigation/footer-copyright/footer-copyright.component.ts)
               - __footer\-navigation__
                 - [footer\-navigation.component.html](src/app/spartacus/storefrontlib/cms-components/custom-navigation/footer-navigation/footer-navigation.component.html)
                 - [footer\-navigation.component.scss](src/app/spartacus/storefrontlib/cms-components/custom-navigation/footer-navigation/footer-navigation.component.scss)
                 - [footer\-navigation.component.spec.ts](src/app/spartacus/storefrontlib/cms-components/custom-navigation/footer-navigation/footer-navigation.component.spec.ts)
                 - [footer\-navigation.component.ts](src/app/spartacus/storefrontlib/cms-components/custom-navigation/footer-navigation/footer-navigation.component.ts)
             - __homepage__
               - __custom\-banner__
                 - [custom\-banner.component.html](src/app/spartacus/storefrontlib/cms-components/homepage/custom-banner/custom-banner.component.html)
                 - [custom\-banner.component.scss](src/app/spartacus/storefrontlib/cms-components/homepage/custom-banner/custom-banner.component.scss)
                 - [custom\-banner.component.spec.ts](src/app/spartacus/storefrontlib/cms-components/homepage/custom-banner/custom-banner.component.spec.ts)
                 - [custom\-banner.component.ts](src/app/spartacus/storefrontlib/cms-components/homepage/custom-banner/custom-banner.component.ts)
               - __custom\-product\-carousel__
                 - [custom\-product\-carousel.component.html](src/app/spartacus/storefrontlib/cms-components/homepage/custom-product-carousel/custom-product-carousel.component.html)
                 - [custom\-product\-carousel.component.scss](src/app/spartacus/storefrontlib/cms-components/homepage/custom-product-carousel/custom-product-carousel.component.scss)
                 - [custom\-product\-carousel.component.spec.ts](src/app/spartacus/storefrontlib/cms-components/homepage/custom-product-carousel/custom-product-carousel.component.spec.ts)
                 - [custom\-product\-carousel.component.ts](src/app/spartacus/storefrontlib/cms-components/homepage/custom-product-carousel/custom-product-carousel.component.ts)
               - [homepage.module.ts](src/app/spartacus/storefrontlib/cms-components/homepage/homepage.module.ts)
             - __my\-account\-page__
               - [my\-account\-page.module.ts](src/app/spartacus/storefrontlib/cms-components/my-account-page/my-account-page.module.ts)
             - __my\-cart\-page__
               - [my\-cart\-page.module.ts](src/app/spartacus/storefrontlib/cms-components/my-cart-page/my-cart-page.module.ts)
             - __product\-detail\-page__
               - __custom\-product\-images__
                 - [custom\-product\-images.component.html](src/app/spartacus/storefrontlib/cms-components/product-detail-page/custom-product-images/custom-product-images.component.html)
                 - [custom\-product\-images.component.scss](src/app/spartacus/storefrontlib/cms-components/product-detail-page/custom-product-images/custom-product-images.component.scss)
                 - [custom\-product\-images.component.spec.ts](src/app/spartacus/storefrontlib/cms-components/product-detail-page/custom-product-images/custom-product-images.component.spec.ts)
                 - [custom\-product\-images.component.ts](src/app/spartacus/storefrontlib/cms-components/product-detail-page/custom-product-images/custom-product-images.component.ts)
               - __custom\-product\-introduction__
                 - [custom\-product\-introduction.component.html](src/app/spartacus/storefrontlib/cms-components/product-detail-page/custom-product-introduction/custom-product-introduction.component.html)
                 - [custom\-product\-introduction.component.scss](src/app/spartacus/storefrontlib/cms-components/product-detail-page/custom-product-introduction/custom-product-introduction.component.scss)
                 - [custom\-product\-introduction.component.spec.ts](src/app/spartacus/storefrontlib/cms-components/product-detail-page/custom-product-introduction/custom-product-introduction.component.spec.ts)
                 - [custom\-product\-introduction.component.ts](src/app/spartacus/storefrontlib/cms-components/product-detail-page/custom-product-introduction/custom-product-introduction.component.ts)
               - __custom\-product\-summary__
                 - [custom\-product\-summary.component.html](src/app/spartacus/storefrontlib/cms-components/product-detail-page/custom-product-summary/custom-product-summary.component.html)
                 - [custom\-product\-summary.component.scss](src/app/spartacus/storefrontlib/cms-components/product-detail-page/custom-product-summary/custom-product-summary.component.scss)
                 - [custom\-product\-summary.component.spec.ts](src/app/spartacus/storefrontlib/cms-components/product-detail-page/custom-product-summary/custom-product-summary.component.spec.ts)
                 - [custom\-product\-summary.component.ts](src/app/spartacus/storefrontlib/cms-components/product-detail-page/custom-product-summary/custom-product-summary.component.ts)
               - [product\-detail\-page.module.ts](src/app/spartacus/storefrontlib/cms-components/product-detail-page/product-detail-page.module.ts)
             - __product\-listing\-page__
               - [product\-listing\-page.module.ts](src/app/spartacus/storefrontlib/cms-components/product-listing-page/product-listing-page.module.ts)
           - __cms\-pages__
             - [cms\-pages.module.ts](src/app/spartacus/storefrontlib/cms-pages/cms-pages.module.ts)
             - __static__
               - [static.module.ts](src/app/spartacus/storefrontlib/cms-pages/static/static.module.ts)
               - __test\-page__
                 - [test\-page.component.html](src/app/spartacus/storefrontlib/cms-pages/static/test-page/test-page.component.html)
                 - [test\-page.component.scss](src/app/spartacus/storefrontlib/cms-pages/static/test-page/test-page.component.scss)
                 - [test\-page.component.spec.ts](src/app/spartacus/storefrontlib/cms-pages/static/test-page/test-page.component.spec.ts)
                 - [test\-page.component.ts](src/app/spartacus/storefrontlib/cms-pages/static/test-page/test-page.component.ts)
           - __routes__
             - [routes.module.ts](src/app/spartacus/storefrontlib/routes/routes.module.ts)
           - __services__
             - [my\-search\-box\-component.service.spec.ts](src/app/spartacus/storefrontlib/services/my-search-box-component.service.spec.ts)
             - [my\-search\-box\-component.service.ts](src/app/spartacus/storefrontlib/services/my-search-box-component.service.ts)
             - [product\-pretty\-name\-normalizer.ts](src/app/spartacus/storefrontlib/services/product-pretty-name-normalizer.ts)
             - [services.module.ts](src/app/spartacus/storefrontlib/services/services.module.ts)
           - [storefrontlib.module.ts](src/app/spartacus/storefrontlib/storefrontlib.module.ts)
     - __assets__
       - __i18n\-assets__
         - __de__
           - [address.json](src/assets/i18n-assets/de/address.json)
           - [cart.json](src/assets/i18n-assets/de/cart.json)
           - [common.json](src/assets/i18n-assets/de/common.json)
           - [customBanner.json](src/assets/i18n-assets/de/customBanner.json)
           - [myAccount.json](src/assets/i18n-assets/de/myAccount.json)
           - [payment.json](src/assets/i18n-assets/de/payment.json)
           - [product.json](src/assets/i18n-assets/de/product.json)
           - [pwa.json](src/assets/i18n-assets/de/pwa.json)
           - [user.json](src/assets/i18n-assets/de/user.json)
         - __en__
           - [address.json](src/assets/i18n-assets/en/address.json)
           - [cart.json](src/assets/i18n-assets/en/cart.json)
           - [common.json](src/assets/i18n-assets/en/common.json)
           - [customBanner.json](src/assets/i18n-assets/en/customBanner.json)
           - [myAccount.json](src/assets/i18n-assets/en/myAccount.json)
           - [payment.json](src/assets/i18n-assets/en/payment.json)
           - [product.json](src/assets/i18n-assets/en/product.json)
           - [pwa.json](src/assets/i18n-assets/en/pwa.json)
           - [user.json](src/assets/i18n-assets/en/user.json)
       - __icons__
         - [icon\-128x128.png](src/assets/icons/icon-128x128.png)
         - [icon\-144x144.png](src/assets/icons/icon-144x144.png)
         - [icon\-152x152.png](src/assets/icons/icon-152x152.png)
         - [icon\-192x192.png](src/assets/icons/icon-192x192.png)
         - [icon\-384x384.png](src/assets/icons/icon-384x384.png)
         - [icon\-512x512.png](src/assets/icons/icon-512x512.png)
         - [icon\-72x72.png](src/assets/icons/icon-72x72.png)
         - [icon\-96x96.png](src/assets/icons/icon-96x96.png)
       - __translations__
         - __de__
           - [address.ts](src/assets/translations/de/address.ts)
           - [cart.ts](src/assets/translations/de/cart.ts)
           - [common.ts](src/assets/translations/de/common.ts)
           - [customCommon.ts](src/assets/translations/de/customCommon.ts)
           - [index.ts](src/assets/translations/de/index.ts)
           - [my\-account.ts](src/assets/translations/de/my-account.ts)
           - [payment.ts](src/assets/translations/de/payment.ts)
           - [product.ts](src/assets/translations/de/product.ts)
           - [pwa.ts](src/assets/translations/de/pwa.ts)
           - [user.ts](src/assets/translations/de/user.ts)
         - __en__
           - [common.ts](src/assets/translations/en/common.ts)
           - [customCommon.ts](src/assets/translations/en/customCommon.ts)
           - [index.ts](src/assets/translations/en/index.ts)
         - [translation\-chunks\-config.ts](src/assets/translations/translation-chunks-config.ts)
         - [translations.ts](src/assets/translations/translations.ts)
     - __environments__
       - [environment.prod.ts](src/environments/environment.prod.ts)
       - [environment.ts](src/environments/environment.ts)
     - [favicon.ico](src/favicon.ico)
     - [index.html](src/index.html)
     - [main.server.ts](src/main.server.ts)
     - [main.ts](src/main.ts)
     - [manifest.webmanifest](src/manifest.webmanifest)
     - [polyfills.ts](src/polyfills.ts)
     - __styles__
       - __spartacus__
         - [asm.scss](src/styles/spartacus/asm.scss)
         - [cart.scss](src/styles/spartacus/cart.scss)
         - [checkout.scss](src/styles/spartacus/checkout.scss)
         - [order.scss](src/styles/spartacus/order.scss)
         - [product.scss](src/styles/spartacus/product.scss)
         - [storefinder.scss](src/styles/spartacus/storefinder.scss)
         - [user.scss](src/styles/spartacus/user.scss)
     - [styles.scss](src/styles.scss)
     - [test.ts](src/test.ts)
   - [tsconfig.app.json](tsconfig.app.json)
   - [tsconfig.json](tsconfig.json)
   - [tsconfig.server.json](tsconfig.server.json)
   - [tsconfig.spec.json](tsconfig.spec.json)
