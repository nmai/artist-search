import { Component, Input } from '@angular/core'
import { SearchItem } from '../interfaces/search-item'

@Component({
  selector: 'results-container',
  templateUrl: './results-container.component.html'
})

export class ResultsContainerComponent {

  @Input() results: Array<SearchItem>

  constructor() {}
}
