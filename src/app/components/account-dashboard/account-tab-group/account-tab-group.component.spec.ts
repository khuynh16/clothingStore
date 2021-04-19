import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTabGroupComponent } from './account-tab-group.component';

describe('AccountTabGroupComponent', () => {
  let component: AccountTabGroupComponent;
  let fixture: ComponentFixture<AccountTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTabGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
