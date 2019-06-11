import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSettingComponent } from './manager-setting.component';

describe('ManagerSettingComponent', () => {
  let component: ManagerSettingComponent;
  let fixture: ComponentFixture<ManagerSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
