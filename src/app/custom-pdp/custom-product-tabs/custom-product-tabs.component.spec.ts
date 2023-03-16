import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductTabsComponent } from './custom-product-tabs.component';

describe('CustomProductTabsComponent', () => {
  let component: CustomProductTabsComponent;
  let fixture: ComponentFixture<CustomProductTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
