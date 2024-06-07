import { TestBed } from '@angular/core/testing';

import { ShareSelectedFoodService } from './share-selected-food.service';

describe('ShareSelectedFoodService', () => {
  let service: ShareSelectedFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareSelectedFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
