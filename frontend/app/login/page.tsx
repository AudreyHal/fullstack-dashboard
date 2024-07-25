"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { LoginInputType } from "@/src/types";
import useLoginMutation from "@/src/hooks/react-query/Auth/mutations/useLoginMutation";
import axiosInstance from "@/src/utilities/axiosApi";
import { setToken } from "@/src/utilities/Auth";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";

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
        // Store jwt
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
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            InputLabelProps={{
              shrink: true,
            }}
            autoFocus
            {...register("username", { required: "Username is required" })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            label="Password"
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Don't have an account? "}
            <Link href="/signup" variant="body2">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
