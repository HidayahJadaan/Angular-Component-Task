import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogoutCompComponent } from './header-logout-comp.component';

describe('HeaderLogoutCompComponent', () => {
  let component: HeaderLogoutCompComponent;
  let fixture: ComponentFixture<HeaderLogoutCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLogoutCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLogoutCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
