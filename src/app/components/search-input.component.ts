import { Component } from '@angular/core'
import { SearchApiService } from './search-api.service'

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html'
})

export class SearchInputComponent {
  constructor(private search: SearchApiService) { }

  doSearch(term: string) {
    this.search.searchArtists(term)
  }
}
