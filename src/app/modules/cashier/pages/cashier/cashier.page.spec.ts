import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierPage } from './cashier.page';

describe('CashierPage', () => {
  let component: CashierPage;
  let fixture: ComponentFixture<CashierPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashierPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
