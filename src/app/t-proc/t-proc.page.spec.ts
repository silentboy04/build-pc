import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TProcPage } from './t-proc.page';

describe('TProcPage', () => {
  let component: TProcPage;
  let fixture: ComponentFixture<TProcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TProcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TProcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
