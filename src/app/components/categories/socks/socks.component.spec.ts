import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocksComponent } from './socks.component';

describe('SocksComponent', () => {
  let component: SocksComponent;
  let fixture: ComponentFixture<SocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
