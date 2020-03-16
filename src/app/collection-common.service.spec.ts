import { TestBed } from '@angular/core/testing';

import { CollectionCommonService } from './collection-common.service';

describe('CollectionCommonService', () => {
  let service: CollectionCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
