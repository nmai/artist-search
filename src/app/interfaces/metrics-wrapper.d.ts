import { MetricItem } from './metric-item'

export interface MetricsWrapper {
  artistId: number
  data: Array<MetricItem>
}
