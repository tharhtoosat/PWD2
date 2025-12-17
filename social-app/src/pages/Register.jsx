import { Alert, Box, Button, OutlinedInput, Typography } from "@mui/material";

export default function Register() {
  return (
    <Box>
      <Typography variant="h3" sx={{ mt: 2 }}>
        Register
      </Typography>
      <Alert severity="warning" sx={{ mt: 2 }}>
        Something Went Wrong.
      </Alert>
      <form>
        <OutlinedInput fullWidth sx={{ mt: 2 }} placeholder="name" />
        <OutlinedInput fullWidth sx={{ mt: 2 }} placeholder="username" />
        <OutlinedInput fullWidth sx={{ mt: 2 }} placeholder="bio" />
        <OutlinedInput
          fullWidth
          sx={{ mt: 2 }}
          placeholder="password"
          type="password"
        />
        <Button fullWidth type="submit" sx={{ mt: 2 }} variant="contained">
          Register
        </Button>
      </form>
    </Box>
  );
}
