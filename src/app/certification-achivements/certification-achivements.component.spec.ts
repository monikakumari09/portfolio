import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationAchivementsComponent } from './certification-achivements.component';

describe('CertificationAchivementsComponent', () => {
  let component: CertificationAchivementsComponent;
  let fixture: ComponentFixture<CertificationAchivementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationAchivementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationAchivementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
