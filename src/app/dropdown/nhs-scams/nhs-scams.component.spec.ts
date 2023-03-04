import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhsScamsComponent } from './nhs-scams.component';

describe('NhsScamsComponent', () => {
  let component: NhsScamsComponent;
  let fixture: ComponentFixture<NhsScamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhsScamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhsScamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
