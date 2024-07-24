import axiosApi from '@/src/services/axiosApi';
import { AveragesDataResponseType } from '@/src/types';
import { useQuery } from '@tanstack/react-query';
import { metricsQueryKeys } from '../metricsQueryKeys';

export const getAverages = async (): Promise<AveragesDataResponseType> => {
    const response = await axiosApi.get(`/metrics/averages`);
    return response.data;
  };
const useGetMetricsAveragesQuery = () => {
    return useQuery({
        queryKey: metricsQueryKeys.averages(),
        queryFn: getAverages,
      });
}

export default useGetMetricsAveragesQuery