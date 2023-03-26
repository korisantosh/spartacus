import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageZoomTriggerComponent } from './product-image-zoom-trigger.component';

describe('ProductImageZoomTriggerComponent', () => {
  let component: ProductImageZoomTriggerComponent;
  let fixture: ComponentFixture<ProductImageZoomTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImageZoomTriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImageZoomTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
