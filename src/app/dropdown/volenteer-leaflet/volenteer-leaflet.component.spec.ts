import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolenteerLeafletComponent } from './volenteer-leaflet.component';

describe('VolenteerLeafletComponent', () => {
  let component: VolenteerLeafletComponent;
  let fixture: ComponentFixture<VolenteerLeafletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolenteerLeafletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolenteerLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
