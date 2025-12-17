import {
  Avatar,
  Box,
  ButtonGroup,
  Card,
  CardContent,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { green, grey } from "@mui/material/colors";
export default function Comment() {
  return (
    <Box sx={{ p: 2, border: "1px solid #66666680" }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Avatar sx={{ width: 52, height: 52, background: grey[500] }} />
        <Box>
          <Typography>Bob</Typography>
          <Typography color="success">a few seconds ago</Typography>
          <Typography sx={{ mt: 1 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            ipsam consequuntur itaque nihil sed, ipsum libero tenetur animi fuga
            nisi assumenda repellendus quos maxime atque illum reprehenderit
            exercitationem iure quis.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
