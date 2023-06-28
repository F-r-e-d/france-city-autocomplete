# france-municipalities-autocomplete
## Ionic 7 Angular 16

france-municipalities-autocomplete is a Ionic 7 Angular 16 library. It's a component that displays a dropdown menu of French municipalities with associated postal codes in a modal with a search bar.

## Installation


```bash
npm install france-municipalities-autocomplete
```

## Usage

```ts
import { FranceMunicipalitiesAutocompleteModule } from 'france-municipalities-autocomplete';
import { NgModule} from '@angular/core';

@NgModule({
  imports: [
    ...
    FranceMunicipalitiesAutocompleteModule
  ],

})

# .ts
public municipalities = {};

# .html
<france-municipalities-autocomplete [(selectedItem)]="municipalities"></france-municipalities-autocomplete>

```

# Properties
- selectedItem: Object => (ngModel)
   - nom_de_la_commune: string
   - code_postal: string

- title (optional): string => (name of label input)
    default : Code postal - commune

