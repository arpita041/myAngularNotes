import { TestBed } from '@angular/core/testing';

import { HttpReqsService } from './http-reqs.service';

describe('HttpReqsService', () => {
  let service: HttpReqsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpReqsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
