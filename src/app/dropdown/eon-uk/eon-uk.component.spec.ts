import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EONUKComponent } from './eon-uk.component';

describe('EONUKComponent', () => {
  let component: EONUKComponent;
  let fixture: ComponentFixture<EONUKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EONUKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EONUKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
