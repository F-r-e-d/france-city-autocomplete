import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranceMunicipalitiesAutocompleteComponent } from './france-municipalities-autocomplete.component';

describe('FranceMunicipalitiesAutocompleteComponent', () => {
  let component: FranceMunicipalitiesAutocompleteComponent;
  let fixture: ComponentFixture<FranceMunicipalitiesAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranceMunicipalitiesAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranceMunicipalitiesAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
