'use client'
import { useForm } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";

import { LoginInputType } from "@/src/types";
import useLoginMutation from "@/src/hooks/react-query/Auth/mutations/useLoginMutation";
import Alert from "@mui/material/Alert";
import axiosInstance from "@/src/services/axiosApi";
import { setToken } from "@/src/utilities/Auth";
import { TextField } from "@mui/material";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputType>();
  const loginMutation = useLoginMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        // Store jwt token
        const token = data.data.token;
        setToken(token);
     
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
        // Redirect to dashboard page
        router.push("/dashboard");
      },
    });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="username"
          {...register("username", { required: "Username is required" })}
          placeholder="Username"
        />
        {errors.username && <p>{errors.username.message}</p>}

        <TextField
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Sign In</button>
        <Alert severity="error">This is an error Alert.</Alert>
      </form>
    </div>
  );
};

export default Login;
