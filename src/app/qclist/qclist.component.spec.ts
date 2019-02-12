import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QclistComponent } from './qclist.component';

describe('QclistComponent', () => {
  let component: QclistComponent;
  let fixture: ComponentFixture<QclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
