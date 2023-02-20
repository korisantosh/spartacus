import { Injectable } from '@angular/core';
import {
  SearchBoxComponentService,
  SearchBoxConfig,
  SearchResults,
} from '@spartacus/storefront';
import {
  EventService,
  RoutingService,
  SearchboxService,
  TranslationService,
  WindowRef,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MySearchBoxComponentService extends SearchBoxComponentService {
  constructor(
    public searchService: SearchboxService,
    protected routingService: RoutingService,
    protected translationService: TranslationService,
    protected winRef: WindowRef,
    protected eventService: EventService
  ) {
    super(
      searchService,
      routingService,
      translationService,
      winRef,
      eventService
    );
  }

  getResults(config: SearchBoxConfig): Observable<SearchResults> {
    return super.getResults(config).pipe(
      tap((res) => {
        if (res.products?.length == 1) {
          this.routingService.go({
            cxRoute: 'product',
            params: res.products[0],
          });
        }
      })
    );
  }
}

// https://github.com/mateuszo/sap-spartacus-samples/blob/master/src/app/services/custom-searchbox-component.service.ts
