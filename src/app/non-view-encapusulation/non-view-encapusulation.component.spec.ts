import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonViewEncapusulationComponent } from './non-view-encapusulation.component';

describe('NonViewEncapusulationComponent', () => {
  let component: NonViewEncapusulationComponent;
  let fixture: ComponentFixture<NonViewEncapusulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonViewEncapusulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonViewEncapusulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
