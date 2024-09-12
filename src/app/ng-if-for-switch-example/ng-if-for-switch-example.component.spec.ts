import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfForSwitchExampleComponent } from './ng-if-for-switch-example.component';

describe('NgIfForSwitchExampleComponent', () => {
  let component: NgIfForSwitchExampleComponent;
  let fixture: ComponentFixture<NgIfForSwitchExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgIfForSwitchExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgIfForSwitchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
