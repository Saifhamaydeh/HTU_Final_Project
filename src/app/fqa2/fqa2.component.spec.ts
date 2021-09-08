import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fqa2Component } from './fqa2.component';

describe('Fqa2Component', () => {
  let component: Fqa2Component;
  let fixture: ComponentFixture<Fqa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fqa2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fqa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
