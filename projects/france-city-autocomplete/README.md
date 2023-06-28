# france-city-autocomplete
## Ionic 7 Angular 16

france-city-autocomplete is a Ionic 7 Angular 16 library. It's a component that displays a dropdown menu of French city with associated postal codes in a modal with a search bar.

## Installation


```bash
npm install france-city-autocomplete
```

## Usage

```ts
import { FranceCityAutocompleteModule } from 'france-city-autocomplete';
import { NgModule} from '@angular/core';

@NgModule({
  imports: [
    ...
    FranceCityAutocompleteModule
  ],

})

# .ts
public city = {};

# .html
<france-city-autocomplete [(selectedItem)]="city"></france-city-autocomplete>

```

# Properties
- selectedItem: Object => (ngModel)
   - nom_de_la_commune: string
   - code_postal: string

- title (optional): string => (name of label input)
    default : Code postal - commune

