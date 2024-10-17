import { Metric } from 'web-vitals';

export function reportWebVitals(metric: Metric) {
  console.log(metric);
  // Here you can send the metric to your analytics service
}
