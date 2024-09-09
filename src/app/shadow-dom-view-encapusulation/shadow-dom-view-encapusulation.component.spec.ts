import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDomViewEncapusulationComponent } from './shadow-dom-view-encapusulation.component';

describe('ShadowDomViewEncapusulationComponent', () => {
  let component: ShadowDomViewEncapusulationComponent;
  let fixture: ComponentFixture<ShadowDomViewEncapusulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShadowDomViewEncapusulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShadowDomViewEncapusulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
