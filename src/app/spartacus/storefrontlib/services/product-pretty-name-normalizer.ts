import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class ProductPrettyNameNormalizer
  implements Converter<Occ.Product, Product>
{
  convert(source: Occ.Product, target?: Product | any): Product {
    if (source.name) {
      target.pretty = source.name?.replace(/ /g, '-').toLocaleLowerCase();
    }
    return target;
  }
}
