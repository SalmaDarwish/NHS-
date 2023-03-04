import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyEONComponent } from './buy-eon.component';

describe('BuyEONComponent', () => {
  let component: BuyEONComponent;
  let fixture: ComponentFixture<BuyEONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyEONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyEONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
