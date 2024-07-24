import axiosApi from '@/src/services/axiosApi';
import { AveragesDataResponseType, MetricsDataResponseType } from '@/src/types';
import { useQuery } from '@tanstack/react-query';
import { metricsQueryKeys } from '../metricsQueryKeys';

export const getAllMetrics = async (): Promise<MetricsDataResponseType[]> => {
    const response = await axiosApi.get(`/metrics/`);
    return response.data;
  };
const useGetAllMetricsQuery = () => {
    return useQuery({
        queryKey: metricsQueryKeys.listMetrics(),
        queryFn: getAllMetrics,
      });
}

export default useGetAllMetricsQuery