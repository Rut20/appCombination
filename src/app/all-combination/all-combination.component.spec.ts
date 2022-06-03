import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCombinationComponent } from './all-combination.component';

describe('AllCombinationComponent', () => {
  let component: AllCombinationComponent;
  let fixture: ComponentFixture<AllCombinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCombinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
