import { Component, Input } from '@angular/core'
import { SearchItem } from '../interfaces/search-item'
import { SearchApiService } from '../search-api.service'

@Component({
  selector: 'item',
  templateUrl: './item.component.html'
})

export class ItemComponent {

  @Input() data: SearchItem

  constructor(private search: SearchApiService) {}

  itemClicked() {
    this.search.fetchMetrics(this.data.id)
  }
}
