import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteTotal2021Component } from './vote-total2021.component';

describe('VoteTotal2021Component', () => {
  let component: VoteTotal2021Component;
  let fixture: ComponentFixture<VoteTotal2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteTotal2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteTotal2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
