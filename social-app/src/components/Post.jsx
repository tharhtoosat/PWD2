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

export default function Post({ post }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Avatar sx={{ width: 64, height: 64, background: green[500] }} />
          <Box>
            <Typography>{post.user.name}</Typography>
            <Typography color="success">{post.createdAt}</Typography>
            <Typography
              onClick={() => navigate(`/show/${post.id}`)}
              sx={{ mt: 1, cursor: "pointer" }}
            >
              {post.content}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <ButtonGroup>
            <IconButton>
              <LikeIcon color="error" />
            </IconButton>
            <Button size="sm" variant="text">
              0
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <IconButton>
              <CommenIcon />
            </IconButton>
            <Button size="sm" variant="text">
              {post.comments ? post.comments.length : 0}
            </Button>
          </ButtonGroup>
        </Box>
      </CardContent>
    </Card>
  );
}
