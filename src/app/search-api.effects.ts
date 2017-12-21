import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Action } from '@ngrx/store'
import { Actions, Effect } from '@ngrx/effects'
import { of } from 'rxjs/observable/of'
import { 
  PERFORM_SEARCH,
  PerformSearchAction, 
  FETCH_METRICS,
  FetchMetricsAction,
  SEARCH_FAILED,
  SearchFailedAction,
  SEARCH_COMPLETE,
  SearchCompleteAction,
  METRICS_RECEIVED,
  MetricsReceivedAction,
  METRICS_FAILED,
  MetricsFailedAction
} from './search-api.actions'
import { 
  generateMetricsUrl,
  generateSearchUrl
} from './common/search-endpoints.utility'
import { SearchItem } from './interfaces/search-item'
import { transformSearchResults, transformMetricsResults } from './common/data-transformers.util'

@Injectable()

export class SearchApiEffects {

  @Effect() search: Observable<Action> = this.actions.ofType(PERFORM_SEARCH)
    .mergeMap((action: PerformSearchAction) => 
      this.http.get(generateSearchUrl(action.payload))
        .map(data => 
          new SearchCompleteAction(transformSearchResults(data.json())))
        .catch(() => of({ type: SEARCH_FAILED }))
    )

  @Effect() metrics: Observable<Action> = this.actions.ofType(FETCH_METRICS)
    .mergeMap((action: FetchMetricsAction) =>
      this.http.get(generateMetricsUrl(action.payload))
        .map(data => 
          new MetricsReceivedAction(transformMetricsResults(data.json())))
        .catch(() => of({ type: METRICS_FAILED }))
    )

  constructor(
    private http: Http,
    private actions: Actions
  ) {}
}