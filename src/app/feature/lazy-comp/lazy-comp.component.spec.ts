import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyCompComponent } from './lazy-comp.component';

describe('LazyCompComponent', () => {
  let component: LazyCompComponent;
  let fixture: ComponentFixture<LazyCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
