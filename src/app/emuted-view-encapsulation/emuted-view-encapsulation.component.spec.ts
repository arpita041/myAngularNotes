import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmutedViewEncapsulationComponent } from './emuted-view-encapsulation.component';

describe('EmutedViewEncapsulationComponent', () => {
  let component: EmutedViewEncapsulationComponent;
  let fixture: ComponentFixture<EmutedViewEncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmutedViewEncapsulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmutedViewEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
