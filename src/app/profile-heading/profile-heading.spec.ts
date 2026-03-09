import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeading } from './profile-heading';

describe('ProfileHeading', () => {
  let component: ProfileHeading;
  let fixture: ComponentFixture<ProfileHeading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileHeading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHeading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
