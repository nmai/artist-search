import { Component, Input } from '@angular/core'
import { SearchItem } from '../interfaces/search-item'
import { MetricItem } from '../interfaces/metric-item'
import { Store } from '@ngrx/store'
import { AppState } from '../interfaces/app-state'
import { FetchMetricsAction } from '../search-api.actions'

@Component({
  selector: 'item',
  templateUrl: './item.component.html'
})

export class ItemComponent {

  @Input() data: SearchItem

  constructor(private store: Store<AppState>) {}

  itemClicked() {
    this.store.dispatch(new FetchMetricsAction(this.data.id))
  }
}
