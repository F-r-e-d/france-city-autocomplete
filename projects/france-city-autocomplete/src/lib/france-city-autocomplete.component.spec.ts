import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranceCityAutocompleteComponent } from './france-city-autocomplete.component';

describe('FranceCityAutocompleteComponent', () => {
  let component: FranceCityAutocompleteComponent;
  let fixture: ComponentFixture<FranceCityAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranceCityAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranceCityAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
