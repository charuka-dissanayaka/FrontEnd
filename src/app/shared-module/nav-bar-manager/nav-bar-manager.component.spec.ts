import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarManagerComponent } from './nav-bar-manager.component';

describe('NavBarManagerComponent', () => {
  let component: NavBarManagerComponent;
  let fixture: ComponentFixture<NavBarManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
