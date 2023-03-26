import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageZoomThumbnailsComponent } from './product-image-zoom-thumbnails.component';

describe('ProductImageZoomThumbnailsComponent', () => {
  let component: ProductImageZoomThumbnailsComponent;
  let fixture: ComponentFixture<ProductImageZoomThumbnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImageZoomThumbnailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImageZoomThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
