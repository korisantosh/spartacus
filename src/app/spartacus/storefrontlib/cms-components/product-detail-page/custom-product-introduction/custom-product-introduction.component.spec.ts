import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductIntroductionComponent } from './custom-product-introduction.component';

describe('CustomProductIntroductionComponent', () => {
  let component: CustomProductIntroductionComponent;
  let fixture: ComponentFixture<CustomProductIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
