import { TestBed } from '@angular/core/testing';

import { UserRegeisterService } from './user-regeister.service';

describe('UserRegeisterService', () => {
  let service: UserRegeisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegeisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
