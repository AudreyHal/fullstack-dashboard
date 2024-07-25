import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse, MetricsInputType } from "@/src/types";
import axiosApi from "@/src/utilities/axiosApi";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_TEXT } from "@/src/utilities/ErrorText";

const addMetrics = (input: MetricsInputType): Promise<AxiosResponse> => {
  return axiosApi.post(`/metrics`, input);
};

const useAddMetricsMutation = () => {
  return useMutation({
    mutationFn: addMetrics,
    onError: (error: ErrorResponse) => {
      toast.error(error?.response?.data.message || DEFAULT_ERROR_TEXT  );
    },
  });
};

export default useAddMetricsMutation;
