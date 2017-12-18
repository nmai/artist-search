import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { SearchItem } from './interfaces/search-item'
import { MetricItem } from './interfaces/metric-item'
import { TimestampedData } from './interfaces/timestamped-data'

// @TODO move such definitions to a separate constants file at least
const generateSearchUrl = name => `http://onesolstice.api3.nextbigsound.com/artists/search.json?q=${name}`
const generateMetricsUrl = id => `http://onesolstice.api3.nextbigsound.com/metrics/artist/${id}.json`

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
        this.results = SearchApiService.transformSearchResults(results)
        this.loading = false
      })
  }

  fetchMetrics(id: number): void {
    this.loading = true
    this.http.get(generateMetricsUrl(id))
      .toPromise()
      .then( response => {
        let results = response.json()
        let cleanres = SearchApiService.transformMetricsResults(results)
        console.log(cleanres)
        this.loading = false
      })
  }

  /**
   * @TODO - move all these static functions to a utility class - they really dont need to be here
   */

  private static transformSearchResults(rawResults: Object): Array<SearchItem> {
    let cleanResults = []

    Object.keys(rawResults).map( key => {
      let res = rawResults[key]
      cleanResults.push({
        id: key,
        name: res.name
      })
    })

    return cleanResults
  }

  private static transformMetricsResults(rawResults: Array<any>): Array<MetricItem> {
    let cleanResults = rawResults.map( rawResult => {
      rawResult.Metric.fans = SearchApiService.unzipTimestampedSet(rawResult.Metric.fans)
      rawResult.Metric.plays = SearchApiService.unzipTimestampedSet(rawResult.Metric.plays)
      return rawResult
    })

    return cleanResults
  }

  // assumes time is the key and data is the value
  private static unzipTimestampedSet(data): Array<TimestampedData> {
    if (!data)
      return []

    return Object.keys(data).map( key => {
      let value = data[key]
      let days = Number(key)
      return {
        time: new Date(days * 86400000),
        data: value
      }
    })
  }
}
