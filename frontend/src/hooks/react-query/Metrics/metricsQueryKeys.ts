export const metricsQueryKeys = {
  // e.g. ['metrics']
  all: () => ["metrics"],
  // e.g. ['metrics', 'list']
  lists: () => [...metricsQueryKeys.all(), "list"],
  // e.g. ['metrics', 'list', 'averages']
  listAverages: () => [...metricsQueryKeys.lists(), 'averages'],
};
