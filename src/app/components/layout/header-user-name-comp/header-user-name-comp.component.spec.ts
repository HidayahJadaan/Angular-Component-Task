import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserNameCompComponent } from './header-user-name-comp.component';

describe('HeaderUserNameCompComponent', () => {
  let component: HeaderUserNameCompComponent;
  let fixture: ComponentFixture<HeaderUserNameCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderUserNameCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUserNameCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
