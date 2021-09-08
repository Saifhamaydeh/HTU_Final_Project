import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fqa1Component } from './fqa1.component';

describe('Fqa1Component', () => {
  let component: Fqa1Component;
  let fixture: ComponentFixture<Fqa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fqa1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fqa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
