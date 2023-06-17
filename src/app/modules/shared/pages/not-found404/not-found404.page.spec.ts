import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFound404Page } from './not-found404.page';

describe('NotFound404Page', () => {
  let component: NotFound404Page;
  let fixture: ComponentFixture<NotFound404Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFound404Page ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFound404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
