import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcleyPlcComponent } from './barcley-plc.component';

describe('BarcleyPlcComponent', () => {
  let component: BarcleyPlcComponent;
  let fixture: ComponentFixture<BarcleyPlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcleyPlcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcleyPlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
