import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayClothingTemplateComponent } from './display-clothing-template.component';

describe('DisplayClothingTemplateComponent', () => {
  let component: DisplayClothingTemplateComponent;
  let fixture: ComponentFixture<DisplayClothingTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayClothingTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayClothingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
