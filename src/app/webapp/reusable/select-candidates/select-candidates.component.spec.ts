import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCandidatesComponent } from './select-candidates.component';

describe('SelectCandidatesComponent', () => {
  let component: SelectCandidatesComponent;
  let fixture: ComponentFixture<SelectCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
