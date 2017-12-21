import { MetricItem } from './metric-item'

export interface SearchItem {
  id: number
  name: string
  metrics?: Array<MetricItem>
}
