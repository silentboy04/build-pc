import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailrakitPage } from './detailrakit.page';

describe('DetailrakitPage', () => {
  let component: DetailrakitPage;
  let fixture: ComponentFixture<DetailrakitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailrakitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailrakitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
