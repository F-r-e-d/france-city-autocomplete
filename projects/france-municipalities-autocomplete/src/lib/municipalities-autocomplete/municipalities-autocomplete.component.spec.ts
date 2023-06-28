import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalitiesAutocompleteComponent } from './municipalities-autocomplete.component';

describe('MunicipalitiesAutocompleteComponent', () => {
  let component: MunicipalitiesAutocompleteComponent;
  let fixture: ComponentFixture<MunicipalitiesAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipalitiesAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalitiesAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
