# ApparelSpaStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## Spartacus

### Validating the Back end

* Use a web browser (Chrome is highly recommended) to access the CMS OCC endpoint of your back end.

  The default is available at: {server-base-url}/rest/v2/electronics/cms/pages.

  For example, with a back end instance running from https://localhost:9002, you would access: https://localhost:9002/rest/v2/electronics/cms/pages.

  Note: SAP Commerce cloud 2005 and above needs to use the occ prefix /occ/v2/. Anything below will be be using the default value of /rest/v2/.

* Accept the security exception in your browser if you are running a development instance with a self-signed HTTPS certificate.

When the request works, you see an XML response in your browser.

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
