import { Alert, Box, Button, OutlinedInput, Typography } from "@mui/material";

export default function Login() {
  return (
    <Box>
      <Typography variant="h3" sx={{ mt: 2 }}>
        Login
      </Typography>
      <Alert severity="warning" sx={{ mt: 2 }}>
        Something Went Wrong.
      </Alert>
      <form>
        <OutlinedInput fullWidth sx={{ mt: 2 }} placeholder="username" />
        <OutlinedInput
          fullWidth
          sx={{ mt: 2 }}
          placeholder="password"
          type="password"
        />
        <Button fullWidth type="submit" sx={{ mt: 2 }} variant="contained">
          Login
        </Button>
      </form>
    </Box>
  );
}
