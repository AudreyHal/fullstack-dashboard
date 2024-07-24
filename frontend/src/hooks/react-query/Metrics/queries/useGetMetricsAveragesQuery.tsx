import axiosApi from '@/src/services/axiosApi';
import { AveragesDataResponseType } from '@/src/types';
import { useQuery } from '@tanstack/react-query';
import { metricsQueryKeys } from '../MetricsQueryKeys';

export const getAverages = async (): Promise<AveragesDataResponseType> => {
    const response = await axiosApi.get(`/metrics/averages`);
    return response.data;
  };
const useGetMetricsAveragesQuery = () => {
    return useQuery({
        queryKey: metricsQueryKeys.listAverages(),
        queryFn: getAverages,
      });
}

export default useGetMetricsAveragesQuery