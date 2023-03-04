import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretWhistleblowerComponent } from './secret-whistleblower.component';

describe('SecretWhistleblowerComponent', () => {
  let component: SecretWhistleblowerComponent;
  let fixture: ComponentFixture<SecretWhistleblowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretWhistleblowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretWhistleblowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
