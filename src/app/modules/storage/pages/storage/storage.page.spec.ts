import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragePage } from './storage.page';

describe('StoragePage', () => {
  let component: StoragePage;
  let fixture: ComponentFixture<StoragePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoragePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
