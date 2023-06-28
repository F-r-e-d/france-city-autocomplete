import { Rule, noop } from '@angular-devkit/schematics';
import { addRootImport } from '@schematics/angular/utility';
import { Schema } from './schema';

export function ngAdd(options: Schema): Rule {
  if (options.addModule) {
    // Add an import `FranceMunicipalitiesAutocompleteModule` from `france-municipalities-autocomplete` to the root of the user's project.
    return addRootImport(options.project, ({ code, external }) => {
      return code`${external(
        'FranceMunicipalitiesAutocompleteModule',
        'france-municipalities-autocomplete'
      )}`;
    });
  }
  return noop();
}
