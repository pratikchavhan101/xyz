import { TestBed } from '@angular/core/testing';

import { TrainDService } from './train-d.service';

describe('TrainDService', () => {
  let service: TrainDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
