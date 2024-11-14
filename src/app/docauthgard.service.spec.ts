import { TestBed } from '@angular/core/testing';

import { DocauthgardService } from './docauthgard.service';

describe('DocauthgardService', () => {
  let service: DocauthgardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocauthgardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
