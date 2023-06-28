import { InjectionToken, ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FranceCityAutocompleteComponent } from './france-city-autocomplete.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FranceCityAutocompleteService } from './france-city-autocomplete.service';
import { LimitPipe } from './pipes/limit/limit.pipe';
import { FormsModule } from '@angular/forms';
import { CityAutocompleteComponent } from './city-autocomplete/city-autocomplete.component';

export interface LibConfig {
  apiUrl: string;
}

export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');

@NgModule({
  declarations: [
    FranceCityAutocompleteComponent,
    CityAutocompleteComponent,
    LimitPipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    FranceCityAutocompleteComponent,
    CityAutocompleteComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FranceCityAutocompleteModule {
  static forRoot(config: LibConfig): ModuleWithProviders<any> {
    return {
      ngModule: FranceCityAutocompleteModule,
      providers: [
        FranceCityAutocompleteService,
        {
          provide: LibConfigService,
          useValue: config
        }
      ]
    };
  }
}
