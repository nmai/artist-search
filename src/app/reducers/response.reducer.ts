import { SearchItem } from '../interfaces/search-item'
import { 
  SEARCH_COMPLETE,
  SearchCompleteAction,
  METRICS_RECEIVED,
  MetricsReceivedAction,
  Actions
} from '../search-api.actions'

export function responseReducer(state: Array<SearchItem> = [], action: Actions) {
  switch (action.type) {
    case SEARCH_COMPLETE:
      return action.payload

    case METRICS_RECEIVED:
      let updatedState = state.splice(0)
      let id = action.payload.artistId
      for (let item of updatedState) {
        if (item.id == id) {
          item.metrics = action.payload.data
          break
        }
      }

      console.log('METRICS EVENT', updatedState)
      return updatedState

    default:
      return state
  }
}