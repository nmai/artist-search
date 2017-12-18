import { TimestampedData } from './timestamped-data'

export interface MetricItem {

  Metric: {
    comments: Array<any>
    fans: Array<TimestampedData>
    plays: Array<TimestampedData>
  }

  Profile: {
    id: number
    url: string
  }

  Service: {
    id: number
    name: string
  }

}
