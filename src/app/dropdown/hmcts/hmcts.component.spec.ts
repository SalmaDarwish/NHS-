import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmctsComponent } from './hmcts.component';

describe('HmctsComponent', () => {
  let component: HmctsComponent;
  let fixture: ComponentFixture<HmctsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HmctsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
