import { ActionReducer, Action } from '@ngrx/store'
import { SearchCompleteAction, SEARCH_COMPLETE } from '../search-api.actions'
import { SearchItem } from '../interfaces/search-item'

export function resultsReducer(state: Array<SearchItem> = [], action: SearchCompleteAction) {
  switch (action.type) {
    case SEARCH_COMPLETE:
      return action.payload

    default:
      return state
  }
}
