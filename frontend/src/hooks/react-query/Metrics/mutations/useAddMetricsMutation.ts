import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse, MetricsInputType } from "@/src/types";
import axiosApi from "@/src/services/axiosApi";
import { toast } from "react-toastify";

const addMetrics = (input: MetricsInputType): Promise<AxiosResponse> => {
  return axiosApi.post(`/metrics`, input);
};

const useAddMetricsMutation = () => {
  return useMutation({
    mutationFn: addMetrics,
    onError: (error: ErrorResponse) => {
      toast.error(error?.response?.data.message);
    },
  });
};

export default useAddMetricsMutation;
