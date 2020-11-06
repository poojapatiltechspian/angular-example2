import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiviualProductCardComponent } from './indiviual-product-card.component';

describe('IndiviualProductCardComponent', () => {
  let component: IndiviualProductCardComponent;
  let fixture: ComponentFixture<IndiviualProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiviualProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiviualProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
