import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentScamsComponent } from './government-scams.component';

describe('GovernmentScamsComponent', () => {
  let component: GovernmentScamsComponent;
  let fixture: ComponentFixture<GovernmentScamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentScamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentScamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
