import { TestBed } from '@angular/core/testing';

import { AdminauthgardService } from './adminauthgard.service';

describe('AdminauthgardService', () => {
  let service: AdminauthgardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminauthgardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
