import {
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { IonModal, IonSearchbar } from '@ionic/angular';

import { v4 as uuidv4 } from 'uuid';

import { POSTAL_CODES } from '../../assets/datas/postalCodes';

@Component({
  selector: 'france-municipalities-autocomplete',
  templateUrl: './municipalities-autocomplete.component.html',
  styleUrls: ['./municipalities-autocomplete.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MunicipalitiesAutocompleteComponent implements OnInit {

  @Output() onBlur: EventEmitter<any> = new EventEmitter<any>();
  @Input() title: string = 'Code postal - commune';


  @Input() selectedItem: Record<string, any> = undefined;
  @Output() selectedItemChange = new EventEmitter<Record<string, any>>();

  @Output() selectionCancel = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<
    Array<Record<string, any>> | Record<string, any>
  >();

  filteredItems: any[] = [];
  workingSelectedValues: Record<string, any> = {};
  @ViewChild('modal', { static: true }) modal!: IonModal;
  @ViewChild('searchbar', { static: false, read: IonSearchbar }) searchbar!: IonSearchbar;


  public items: Array<Record<string, any>> = POSTAL_CODES.postalCodes;

  public query: string = '';
  public uuid: string = '';
  private highlightedItems: { [key: string]: string } = {};

  constructor(private ngZone: NgZone) {}

  async ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.uuid = uuidv4();
    });
  }

  trackItems(index: number, item: any) {
    return item.nom_de_la_commune || item.code_postal;
  }

  async focusSearchbar() {
       await this.searchbar.setFocus();
  }

  cancelChanges() {
    this.selectionCancel.emit();
  }

  confirmChanges() {
    this.selectionChange.emit(this.workingSelectedValues);
    this.selectedItemChange.emit(this.workingSelectedValues);
  }

  searchbarInput(value: string) {
    this.query = value;
    this.filterList(value);
  }

  /**
   * Update the rendered view with
   * the provided search query. If no
   * query is provided, empty array
   * will be rendered.
   */
  filterList(searchQuery: string | undefined) {
    /**
     * If no search query is defined,
     * return empty array.
     */
    if (searchQuery === undefined) {
      this.filteredItems = [];
    } else {
      /**
       * Otherwise, normalize the search
       * query and check to see which items
       * contain the search query as a substring.
       */
      const normalizedQuery = searchQuery.toLowerCase();
      this.filteredItems = this.items
        .filter((item) => {
             return (
            item.nom_de_la_commune.toLowerCase().startsWith(normalizedQuery) ||
            item.code_postal.toLowerCase().startsWith(normalizedQuery)
          );
        })
        .sort((a, b) =>
          a.nom_de_la_commune
            .normalize()
            .localeCompare(b.nom_de_la_commune.normalize())
        );
    }
  }


  valueSelected(value: Record<string, any>) {
     this.workingSelectedValues = value;

    this.confirmChanges();
    this.modal.dismiss();
  }

  compareWith(o1: { name: string }, o2: { name: string }) {
    return o1 && o2 ? o1.name === o2.name : o1 === o2;
  }

  onSearchChange(value: string) {
    this.query = value.toLowerCase();
    this.filteredItems = this.items
      .filter(
        (item) =>
          item.nom_de_la_commune.toLowerCase().includes(this.query) ||
          item.code_postal.toLowerCase().includes(this.query)
      )
      .sort((a, b) => {
        if (b.nom_de_la_commune.toLowerCase().startsWith(this.query)) {
          return 1;
        }
        return -1;
      });
  }

  highlightText(item: string): string {
    if (this.query && item.toLowerCase().includes(this.query.toLowerCase())) {

      const regex = new RegExp(this.query, 'gi');
      const highlightedItem = item.replace(
        regex,
        (match) => `<span class="highlight">${match}</span>`
      );

      this.highlightedItems[item] = highlightedItem;

      return highlightedItem;
    }

    return item;
  }
}
