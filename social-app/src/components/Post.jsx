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
import { green } from "@mui/material/colors";
import {
  FavoriteBorderOutlined as LikeIcon,
  ChatBubbleOutline as CommenIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router";

export default function Post() {
  const navigate = useNavigate();
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Avatar sx={{ width: 64, height: 64, background: green[500] }} />
          <Box>
            <Typography>Alice</Typography>
            <Typography color="success">a few seconds ago</Typography>
            <Typography onClick={() => navigate("/show")} sx={{ mt: 1 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              ipsam consequuntur itaque nihil sed, ipsum libero tenetur animi
              fuga nisi assumenda repellendus quos maxime atque illum
              reprehenderit exercitationem iure quis.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <ButtonGroup>
            <IconButton>
              <LikeIcon color="error" />
            </IconButton>
            <Button size="sm" variant="text">
              10
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <IconButton>
              <CommenIcon />
            </IconButton>
            <Button size="sm" variant="text">
              5
            </Button>
          </ButtonGroup>
        </Box>
      </CardContent>
    </Card>
  );
}
