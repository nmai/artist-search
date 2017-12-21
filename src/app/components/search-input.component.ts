import { Component } from '@angular/core'
import { SearchApiService } from '../search-api.service'
import { Store } from '@ngrx/store'
import { AppState } from '../interfaces/app-state'
import { PerformSearchAction } from '../search-api.actions'

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html'
})

export class SearchInputComponent {
  constructor(
    private search: SearchApiService,
    private store: Store<AppState>
  ) {}

  doSearch(term: string) {
    this.store.dispatch(new PerformSearchAction(term))
  }
}
