import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarrakitPage } from './daftarrakit.page';

describe('DaftarrakitPage', () => {
  let component: DaftarrakitPage;
  let fixture: ComponentFixture<DaftarrakitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarrakitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarrakitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
