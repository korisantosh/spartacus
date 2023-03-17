import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPdpProductTabsComponent } from './custom-pdp-product-tabs.component';

describe('CustomPdpProductTabsComponent', () => {
  let component: CustomPdpProductTabsComponent;
  let fixture: ComponentFixture<CustomPdpProductTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPdpProductTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPdpProductTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
