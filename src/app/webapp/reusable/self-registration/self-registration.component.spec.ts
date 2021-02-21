import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfRegistrationComponent } from './self-registration.component';

describe('SelfRegistrationComponent', () => {
  let component: SelfRegistrationComponent;
  let fixture: ComponentFixture<SelfRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
