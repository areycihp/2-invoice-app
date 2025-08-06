import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { RowItem } from '../row-item/row-item';

@Component({
  selector: 'list-items',
  imports: [
    RowItem,
  ],
  templateUrl: './list-items.html'
})
export class ListItems {
  @Input() items: Item[] = [];
}
