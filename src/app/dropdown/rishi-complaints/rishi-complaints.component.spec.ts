import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RishiComplaintsComponent } from './rishi-complaints.component';

describe('RishiComplaintsComponent', () => {
  let component: RishiComplaintsComponent;
  let fixture: ComponentFixture<RishiComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RishiComplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RishiComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
