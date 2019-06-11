import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcSettingComponent } from './qc-setting.component';

describe('QcSettingComponent', () => {
  let component: QcSettingComponent;
  let fixture: ComponentFixture<QcSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
