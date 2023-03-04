import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbonoBarristerComponent } from './probono-barrister.component';

describe('ProbonoBarristerComponent', () => {
  let component: ProbonoBarristerComponent;
  let fixture: ComponentFixture<ProbonoBarristerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbonoBarristerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbonoBarristerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
