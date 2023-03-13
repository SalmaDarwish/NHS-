import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeChampionsLitigationTeamComponent } from './change-champions-litigation-team.component';

describe('ChangeChampionsLitigationTeamComponent', () => {
  let component: ChangeChampionsLitigationTeamComponent;
  let fixture: ComponentFixture<ChangeChampionsLitigationTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeChampionsLitigationTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeChampionsLitigationTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
