import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ActiveCartService,
  Cart,
  OrderEntry,
  PromotionLocation
} from '@spartacus/core';
import { Observable } from 'rxjs';
import {
  filter,
  map,
  shareReplay,
  startWith,
  switchMap,
  switchMapTo,
  tap,
} from 'rxjs/operators';
import { ModalService } from '@spartacus/storefront';
import { CartItemComponent } from '../cart-item/cart-item.component';
//import { ModalService } from '../../../../shared/components/modal/modal.service';

@Component({
  selector: 'app-added-to-cart-dialog',
  templateUrl: './added-to-cart-dialog.component.html',
  styleUrls: ['./added-to-cart-dialog.component.scss']
})
export class AddedToCartDialogComponent implements OnInit {

  entry$: Observable<OrderEntry | any>;
  cart$: Observable<Cart | any>;
  loaded$: Observable<boolean>;
  addedEntryWasMerged$: Observable<boolean>;
  numberOfEntriesBeforeAdd: number;
  promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;

  quantity = 0;
  modalIsOpen = false;

  @ViewChild('dialog', { read: ElementRef })
  dialog: ElementRef;

  form: FormGroup = new FormGroup({});

  protected quantityControl$: Observable<FormControl>;

  constructor(
    protected modalService: ModalService,
    protected cartService: ActiveCartService
  ) {
    console.log(this.entry$);
  }
  /**
   * Returns an observable formControl with the quantity of the cartEntry,
   * but also updates the entry in case of a changed value.
   * The quantity can be set to zero in order to remove the entry.
   */
  getQuantityControl(): Observable<FormControl> {
    if (!this.quantityControl$) {
      this.quantityControl$ = this.entry$.pipe(
        filter((e) => !!e),
        map((entry) => this.getQuantityFormControl(entry)),
        switchMap(() =>
          this.form.valueChanges.pipe(
            // eslint-disable-next-line import/no-deprecated
            startWith(null),
            tap((valueChange) => {
              if (valueChange) {
                this.cartService.updateEntry(
                  valueChange.entryNumber,
                  valueChange.quantity
                );
                if (valueChange.quantity === 0) {
                  this.dismissModal('Removed');
                }
              } else {
                this.form.markAsPristine();
              }
            })
          )
        ),
        map(() => <FormControl>this.form.get('quantity')),
        shareReplay({ bufferSize: 1, refCount: true })
      );
    }
    return this.quantityControl$;
  }

  ngOnInit() {

    this.addedEntryWasMerged$ = this.loaded$.pipe(
      filter((loaded) => loaded),
      switchMapTo(this.cartService.getEntries()),
      map((entries) => entries.length === this.numberOfEntriesBeforeAdd)
    );
    console.log('---');
    console.log(this.entry$);
  }

  /**
   * Adds quantity and entryNumber form controls to the FormGroup.
   * Returns quantity form control.
   */
  protected getQuantityFormControl(entry: OrderEntry): FormControl {
    if (!this.form.get('quantity')) {
      const quantity = new FormControl(entry.quantity, { updateOn: 'blur' });
      this.form.addControl('quantity', quantity);

      const entryNumber = new FormControl(entry.entryNumber);
      this.form.addControl('entryNumber', entryNumber);
    }
    return <FormControl>this.form.get('quantity');
  }

  dismissModal(reason?: any): void {
    this.modalService.dismissActiveModal(reason);
  }

}
