import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormExComponent } from './template-driven-form-ex.component';

describe('TemplateDrivenFormExComponent', () => {
  let component: TemplateDrivenFormExComponent;
  let fixture: ComponentFixture<TemplateDrivenFormExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDrivenFormExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDrivenFormExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
