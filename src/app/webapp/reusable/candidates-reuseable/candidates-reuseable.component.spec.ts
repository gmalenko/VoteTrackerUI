import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesReuseableComponent } from './candidates-reuseable.component';

describe('CandidatesReuseableComponent', () => {
  let component: CandidatesReuseableComponent;
  let fixture: ComponentFixture<CandidatesReuseableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesReuseableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesReuseableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
