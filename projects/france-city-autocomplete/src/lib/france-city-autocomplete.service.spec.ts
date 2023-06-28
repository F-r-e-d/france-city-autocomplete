import { TestBed } from '@angular/core/testing';

import { FranceCityAutocompleteService } from './france-city-autocomplete.service';

describe('FranceCityAutocompleteService', () => {
  let service: FranceCityAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FranceCityAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
