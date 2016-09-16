/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InMemoryHeroDataService } from './in-memory-hero-data-service.service';

describe('Service: InMemoryHeroDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryHeroDataService]
    });
  });

  it('should ...', inject([InMemoryHeroDataService], (service: InMemoryHeroDataService) => {
    expect(service).toBeTruthy();
  }));
});
