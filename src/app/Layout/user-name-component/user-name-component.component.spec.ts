import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNameComponentComponent } from './user-name-component.component';

describe('UserNameComponentComponent', () => {
  let component: UserNameComponentComponent;
  let fixture: ComponentFixture<UserNameComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserNameComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
