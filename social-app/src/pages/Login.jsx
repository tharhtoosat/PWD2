import { Alert, Box, Button, OutlinedInput, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useApp } from "../AppProvider";
const api = "http://localhost:8800";

export default function Login() {
  const navigate = useNavigate();
  const { setAuth } = useApp();
  const [loginError, setLoginError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const login = async (data) => {
    const res = await fetch(`${api}/users/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      setLoginError(true);
      return false;
    }
    const { user, token } = await res.json();
    localStorage.setItem("token", token);
    setAuth(user);
    navigate("/");
  };
  return (
    <Box>
      {loginError && (
        <Alert severity="warning" sx={{ mt: 2 }}>
          Unable to login.
        </Alert>
      )}
      <Typography variant="h3" sx={{ mt: 2 }}>
        Login
      </Typography>

      <form onSubmit={handleSubmit(login)}>
        <OutlinedInput
          fullWidth
          sx={{ mt: 2 }}
          placeholder="username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <Typography color="error">username is required.</Typography>
        )}
        <OutlinedInput
          fullWidth
          sx={{ mt: 2 }}
          placeholder="password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <Typography color="error">username is required.</Typography>
        )}
        <Button fullWidth type="submit" sx={{ mt: 2 }} variant="contained">
          Login
        </Button>
      </form>
    </Box>
  );
}
