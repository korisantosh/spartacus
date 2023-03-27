import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageZoomViewComponent } from './product-image-zoom-view.component';

describe('ProductImageZoomViewComponent', () => {
  let component: ProductImageZoomViewComponent;
  let fixture: ComponentFixture<ProductImageZoomViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImageZoomViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImageZoomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
