import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntimateViewComponent } from './intimate-view.component';

describe('IntimateViewComponent', () => {
  let component: IntimateViewComponent;
  let fixture: ComponentFixture<IntimateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntimateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntimateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
