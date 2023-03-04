import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarclaysLegalRightsComponent } from './barclays-legal-rights.component';

describe('BarclaysLegalRightsComponent', () => {
  let component: BarclaysLegalRightsComponent;
  let fixture: ComponentFixture<BarclaysLegalRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarclaysLegalRightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarclaysLegalRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
