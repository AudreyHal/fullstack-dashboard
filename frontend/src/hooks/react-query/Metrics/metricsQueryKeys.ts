export const metricsQueryKeys = {
  // e.g. ['metrics']
  all: () => ["metrics"],
  // e.g. ['metrics', 'list']
  listMetrics: () => [...metricsQueryKeys.all(), "list"],
  // e.g. ['metrics', 'averages']
  averages: () => [...metricsQueryKeys.all(), "averages"],
};
