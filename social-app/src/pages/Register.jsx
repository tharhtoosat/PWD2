import { Alert, Box, Button, OutlinedInput, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useApp } from "../AppProvider";
import { useForm } from "react-hook-form";
const api = "http://localhost:8800";

export default function Register() {
  const navigate = useNavigate();
  const { setAuth } = useApp();
  const { registerError, setRegisterError } = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const create = async (data) => {
    const res = await fetch(`${api}/users`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      setRegisterError(true);
      return false;
    }
    navigate("/login");
  };
  return (
    <Box>
      {registerError && (
        <Alert severity="warning" sx={{ mt: 2 }}>
          Something went wrong.
        </Alert>
      )}
      <Typography variant="h3" sx={{ mt: 2 }}>
        Register
      </Typography>

      <form onSubmit={handleSubmit(create)}>
        <OutlinedInput
          fullWidth
          sx={{ mt: 2 }}
          placeholder="name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <Typography color="error">Name is required.</Typography>
        )}
        <OutlinedInput
          fullWidth
          sx={{ mt: 2 }}
          placeholder="username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <Typography color="error">Username is required.</Typography>
        )}
        <OutlinedInput
          fullWidth
          sx={{ mt: 2 }}
          placeholder="bio"
          {...register("bio")}
        />
        <OutlinedInput
          fullWidth
          sx={{ mt: 2 }}
          placeholder="password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <Typography color="error">Password is required.</Typography>
        )}
        <Button fullWidth type="submit" sx={{ mt: 2 }} variant="contained">
          Register
        </Button>
      </form>
    </Box>
  );
}
