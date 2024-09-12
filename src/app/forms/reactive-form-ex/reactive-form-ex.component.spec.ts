import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormExComponent } from './reactive-form-ex.component';

describe('ReactiveFormExComponent', () => {
  let component: ReactiveFormExComponent;
  let fixture: ComponentFixture<ReactiveFormExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveFormExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveFormExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
