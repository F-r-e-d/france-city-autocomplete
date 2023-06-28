import { InjectionToken, ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FranceMunicipalitiesAutocompleteComponent } from './france-municipalities-autocomplete.component';
import { MunicipalitiesAutocompleteComponent } from './municipalities-autocomplete/municipalities-autocomplete.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FranceMunicipalitiesAutocompleteService } from './france-municipalities-autocomplete.service';
import { LimitPipe } from './pipes/limit/limit.pipe';
import { FormsModule } from '@angular/forms';

export interface LibConfig {
  apiUrl: string;
}

export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');

@NgModule({
  declarations: [
    FranceMunicipalitiesAutocompleteComponent,
    MunicipalitiesAutocompleteComponent,
    LimitPipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    FranceMunicipalitiesAutocompleteComponent,
    MunicipalitiesAutocompleteComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FranceMunicipalitiesAutocompleteModule {
  static forRoot(config: LibConfig): ModuleWithProviders<any> {
    return {
      ngModule: FranceMunicipalitiesAutocompleteModule,
      providers: [
        FranceMunicipalitiesAutocompleteService,
        {
          provide: LibConfigService,
          useValue: config
        }
      ]
    };
  }
}
