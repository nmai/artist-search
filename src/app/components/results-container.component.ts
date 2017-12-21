import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { SearchItem } from '../interfaces/search-item'
import { AppState } from '../interfaces/app-state'

@Component({
  selector: 'results-container',
  templateUrl: './results-container.component.html'
})

export class ResultsContainerComponent {

  results: Observable<Array<SearchItem>>

  constructor(private store: Store<AppState>) {
    this.results = store.select('searchResults')
  }
}
