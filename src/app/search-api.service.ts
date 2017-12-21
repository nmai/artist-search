import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { SearchItem } from './interfaces/search-item'
import { MetricItem } from './interfaces/metric-item'
import { TimestampedData } from './interfaces/timestamped-data'
import { MetricsWrapper } from './interfaces/metrics-wrapper'
import {
  generateMetricsUrl,
  generateSearchUrl
} from './common/search-endpoints.utility'
import {
  transformSearchResults,
  transformMetricsResults
} from './common/data-transformers.util'

@Injectable() 
export class SearchApiService {
  public results: Array<SearchItem>
  public loading: boolean

  constructor(private http: Http) { 
    this.results = []
    this.loading = false
  }

  searchArtists(name: string): void {
    this.loading = true
    this.http.get(generateSearchUrl(name))
      .toPromise()
      .then( response => {
        let results = response.json()
        this.results = transformSearchResults(results)
        this.loading = false
      })
  }

  fetchMetrics(id: number): void {
    this.loading = true
    this.http.get(generateMetricsUrl(id))
      .toPromise()
      .then( response => {
        let results = response.json()
        let cleanres = <MetricsWrapper> {
          artistId: id,
          data: transformMetricsResults(results)
        }
        this.loading = false
      })
  }
}
