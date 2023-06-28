import { Rule, noop } from '@angular-devkit/schematics';
import { addRootImport } from '@schematics/angular/utility';
import { Schema } from './schema';

export function ngAdd(options: Schema): Rule {
  if (options.addModule) {
    // Add an import `FranceCityAutocompleteModule` from `france-city-autocomplete` to the root of the user's project.
    return addRootImport(options.project, ({ code, external }) => {
      return code`${external(
        'FranceCityAutocompleteModule',
        'france-city-autocomplete'
      )}`;
    });
  }
  return noop();
}
