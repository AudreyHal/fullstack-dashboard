import axiosApi from '@/src/services/axiosApi';
import { AveragesDataResponseType } from '@/src/types';
import { useQuery } from '@tanstack/react-query';

export const getAverages = async (): Promise<AveragesDataResponseType> => {
    const response = await axiosApi.get(`/metrics/average`);
    return response.data;
  };
const useGetMetricsAveragesQuery = () => {
    return useQuery({
        queryKey: ['averages'],
        queryFn: getAverages,
      });
}

export default useGetMetricsAveragesQuery