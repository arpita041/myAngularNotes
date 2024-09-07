import { TestBed } from '@angular/core/testing';

import { ObservablesExampleService } from './observables-example.service';

describe('ObservablesExampleService', () => {
  let service: ObservablesExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservablesExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
