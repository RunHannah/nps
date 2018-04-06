import { TestBed, inject } from '@angular/core/testing';

import { NpsApiService } from './nps-api.service';

describe('NpsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NpsApiService]
    });
  });

  it('should be created', inject([NpsApiService], (service: NpsApiService) => {
    expect(service).toBeTruthy();
  }));
});
