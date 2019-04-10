import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulaiRakitPage } from './mulai-rakit.page';

describe('MulaiRakitPage', () => {
  let component: MulaiRakitPage;
  let fixture: ComponentFixture<MulaiRakitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulaiRakitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulaiRakitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
