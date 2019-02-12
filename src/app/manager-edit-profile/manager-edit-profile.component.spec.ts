import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerEditProfileComponent } from './manager-edit-profile.component';

describe('ManagerEditProfileComponent', () => {
  let component: ManagerEditProfileComponent;
  let fixture: ComponentFixture<ManagerEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
