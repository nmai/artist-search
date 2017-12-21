import { SearchItem } from '../interfaces/search-item'
import { MetricItem } from '../interfaces/metric-item'
import { TimestampedData } from '../interfaces/timestamped-data'

export function transformSearchResults(rawResults: Object): Array<SearchItem> {
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

export function transformMetricsResults(rawResults: Array<any>): Array<MetricItem> {
  let cleanResults = rawResults.map( rawResult => {
    rawResult.Metric.fans = unzipTimestampedSet(rawResult.Metric.fans)
    rawResult.Metric.plays = unzipTimestampedSet(rawResult.Metric.plays)
    return rawResult
  })

  return cleanResults
}


// assumes time is the key and data is the value
function unzipTimestampedSet(data): Array<TimestampedData> {
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