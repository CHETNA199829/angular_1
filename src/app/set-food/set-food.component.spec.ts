import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFoodComponent } from './set-food.component';

describe('SetFoodComponent', () => {
  let component: SetFoodComponent;
  let fixture: ComponentFixture<SetFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetFoodComponent]
    });
    fixture = TestBed.createComponent(SetFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
