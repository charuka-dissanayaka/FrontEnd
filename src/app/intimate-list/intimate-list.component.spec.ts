import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntimateListComponent } from './intimate-list.component';

describe('IntimateListComponent', () => {
  let component: IntimateListComponent;
  let fixture: ComponentFixture<IntimateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntimateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntimateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
