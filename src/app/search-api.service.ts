import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

// @TODO move such definitions to a separate constants file at least
const generateSearchUrl = name => `http://onesolstice.api3.nextbigsound.com/artists/search.json?q=${name}`
const generateMetricsUrl = id => `http://onesolstice.api3.nextbigsound.com/metrics/artist/${id}.json`

@Injectable() 
export class SearchApiService {
  results: Object[]
  loading: boolean

  constructor(private http: Http) { 
    this.results = []
    this.loading = false
  }

  searchArtists(name: string) {
    return this.http.get(generateSearchUrl(name))
      .toPromise()
      .then(
        res => {
          console.log(res.json())
        }
      )
  }
}
