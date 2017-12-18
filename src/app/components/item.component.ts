import { Component, Input } from '@angular/core'
import { SearchItem } from '../interfaces/search-item'

@Component({
  selector: 'item',
  templateUrl: './item.component.html'
})

export class ItemComponent {

  @Input() data: SearchItem

  constructor() {}
}
