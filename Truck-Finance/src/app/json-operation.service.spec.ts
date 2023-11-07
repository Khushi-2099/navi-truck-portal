import { TestBed } from '@angular/core/testing';

import { JsonOperationService } from './json-operation.service';

describe('JsonOperationService', () => {
  let service: JsonOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
