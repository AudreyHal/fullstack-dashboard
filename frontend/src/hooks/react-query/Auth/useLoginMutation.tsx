
import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import { LoginInputType } from "@/src/types";
import axiosApi from "@/src/services/axiosApi";
import { toast } from "react-toastify";


const loginUser = (input:  LoginInputType):  Promise<AxiosResponse> => {
  return axiosApi.post(`login`, input);
};

const useLoginMutation = () => {
  return useMutation({
    mutationFn: loginUser,
    onError: (error: any)=>{
        toast.error(error?.response?.data.message)
    },
  });
}

export default useLoginMutation;