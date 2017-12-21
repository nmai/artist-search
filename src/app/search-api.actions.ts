import { Action } from '@ngrx/store'
import { Observable } from "rxjs/Observable"
import { Operator } from "rxjs/Operator"

import { MetricsWrapper } from './interfaces/metrics-wrapper'
import { SearchItem } from './interfaces/search-item'

export const PERFORM_SEARCH     = '[Search API] Perform Search'
export const FETCH_METRICS      = '[Search API] Fetch Metrics'
export const SEARCH_COMPLETE    = '[Search API] Search Complete'
export const SEARCH_FAILED      = '[Search API] Search Failed'
export const METRICS_RECEIVED   = '[Search API] Metrics Complete'
export const METRICS_FAILED     = '[Search API] Metrics Failed'


/**
 * @TODO
 * - Define a specific type for the SearchCompleteAction payload
 */


export class PerformSearchAction implements Action {
  readonly type = PERFORM_SEARCH

  constructor(public payload: string) {}
}

export class FetchMetricsAction  implements Action {
  readonly type = FETCH_METRICS

  constructor(public payload: number) {}
}

export class SearchCompleteAction  implements Action {
  readonly type = SEARCH_COMPLETE

  constructor(public payload: Array<SearchItem>) {}
}

export class SearchFailedAction  implements Action {
  readonly type = SEARCH_FAILED
}

export class MetricsReceivedAction  implements Action {
  readonly type = METRICS_RECEIVED

  constructor(public payload: MetricsWrapper) {}
}

export class MetricsFailedAction  implements Action {
  readonly type = METRICS_FAILED
}

export type Actions =
  | PerformSearchAction
  | FetchMetricsAction
  | SearchCompleteAction
  | SearchFailedAction
  | MetricsReceivedAction
  | MetricsFailedAction
