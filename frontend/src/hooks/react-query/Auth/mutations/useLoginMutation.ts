
import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse, LoginInputType } from "@/src/types";
import axiosApi from "@/src/utilities/axiosApi";
import { toast } from "react-toastify";
import { DEFAULT_ERROR_TEXT } from "@/src/utilities/ErrorText";


const loginUser = (input: LoginInputType): Promise<AxiosResponse> => {
  return axiosApi.post(`login`, input);
};

const useLoginMutation = () => {
  return useMutation({
    mutationFn: loginUser,
    onError: (error: ErrorResponse) => {
      toast.error(error?.response?.data.message || DEFAULT_ERROR_TEXT)
    },
  });
}

export default useLoginMutation;
