"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import useSignupMutation from "@/src/hooks/react-query/Auth/mutations/useSignUpMutation";
import { toast } from "react-toastify";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const signupMutation = useSignupMutation();

  const onSubmit = async (data) => {
    signupMutation.mutate(data, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        // redirect to login page
        router.push("/login");
      },
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
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
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 6,
                message: "Username should be at least 6 characters long",
              },
            })}
            error={!!errors.username}
            helperText={errors.username?.message}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be at least 6 characters long",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Already have an account? "}
            <Link href="/login" variant="body2">
              Sign In
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
