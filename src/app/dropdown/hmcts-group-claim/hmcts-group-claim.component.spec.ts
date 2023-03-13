import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HMCTSGroupClaimComponent } from './hmcts-group-claim.component';

describe('HMCTSGroupClaimComponent', () => {
  let component: HMCTSGroupClaimComponent;
  let fixture: ComponentFixture<HMCTSGroupClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HMCTSGroupClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HMCTSGroupClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
