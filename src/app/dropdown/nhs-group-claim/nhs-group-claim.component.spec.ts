import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NHSGroupClaimComponent } from './nhs-group-claim.component';

describe('NHSGroupClaimComponent', () => {
  let component: NHSGroupClaimComponent;
  let fixture: ComponentFixture<NHSGroupClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NHSGroupClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NHSGroupClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
