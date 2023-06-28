import { TestBed } from '@angular/core/testing';

import { FranceMunicipalitiesAutocompleteService } from './france-municipalities-autocomplete.service';

describe('FranceMunicipalitiesAutocompleteService', () => {
  let service: FranceMunicipalitiesAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FranceMunicipalitiesAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
