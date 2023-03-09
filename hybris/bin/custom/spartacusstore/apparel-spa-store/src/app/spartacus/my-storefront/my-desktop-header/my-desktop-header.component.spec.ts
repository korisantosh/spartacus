import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDesktopHeaderComponent } from './my-desktop-header.component';

describe('MyDesktopHeaderComponent', () => {
  let component: MyDesktopHeaderComponent;
  let fixture: ComponentFixture<MyDesktopHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDesktopHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDesktopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
