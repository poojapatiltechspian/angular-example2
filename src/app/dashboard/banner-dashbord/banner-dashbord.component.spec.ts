import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDashbordComponent } from './banner-dashbord.component';

describe('BannerDashbordComponent', () => {
  let component: BannerDashbordComponent;
  let fixture: ComponentFixture<BannerDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerDashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
