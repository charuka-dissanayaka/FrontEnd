import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasComponent } from './bras.component';

describe('BrasComponent', () => {
  let component: BrasComponent;
  let fixture: ComponentFixture<BrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
