import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageZoomProductImagesComponent } from './product-image-zoom-product-images.component';

describe('ProductImageZoomProductImagesComponent', () => {
  let component: ProductImageZoomProductImagesComponent;
  let fixture: ComponentFixture<ProductImageZoomProductImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImageZoomProductImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImageZoomProductImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
