import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpResponseCompComponent } from './http-response-comp.component';

describe('HttpResponseCompComponent', () => {
  let component: HttpResponseCompComponent;
  let fixture: ComponentFixture<HttpResponseCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpResponseCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpResponseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
