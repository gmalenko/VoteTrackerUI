import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationReuseableComponent } from './registration-reuseable.component';

describe('RegistrationReuseableComponent', () => {
  let component: RegistrationReuseableComponent;
  let fixture: ComponentFixture<RegistrationReuseableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationReuseableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationReuseableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
