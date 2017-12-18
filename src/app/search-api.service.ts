import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { SearchItem } from './interfaces/search-item'

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
        this.results = this.transformSearchResults(results)
        this.loading = false
      })
  }

  private transformSearchResults(rawResults: Object): Array<SearchItem> {
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
}
