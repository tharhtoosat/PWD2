import { Box } from "@mui/material";
import Post from "../components/Post";
import Comment from "../components/Comment";

export default function Home() {
  return (
    <Box>
      <Post />
      <Post />
      <Post />
    </Box>
  );
}
