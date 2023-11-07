import { TestBed } from '@angular/core/testing';

import { RedirectMenuService } from './redirect-menu.service';

describe('RedirectMenuService', () => {
  let service: RedirectMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
