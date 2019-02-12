import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntimateComponent } from './intimate.component';

describe('IntimateComponent', () => {
  let component: IntimateComponent;
  let fixture: ComponentFixture<IntimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
