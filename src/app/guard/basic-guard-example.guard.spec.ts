import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { basicGuardExampleGuard } from './basic-guard-example.guard';

describe('basicGuardExampleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => basicGuardExampleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
