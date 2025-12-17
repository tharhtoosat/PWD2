import Item from "./Item.jsx";
import Form from "./Form.jsx";
import Header from "./Header.jsx";
import { Box, Container, Divider, List, Typography } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const api = "http://localhost:8800/tasks";

export default function App() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch(api);
      return res.json();
    },
  });

  const add = async (name) => {
    await fetch(api, {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await queryClient.invalidateQueries(["tasks"]);
  };

  const del = async (id) => {
    await fetch(`${api}/${id}`, { method: "DELETE" });
    await queryClient.invalidateQueries(["tasks"]);
  };

  const toggle = async (id) => {
    await fetch(`${api}/${id}/toggle`, { method: "PUT" });
    await queryClient.invalidateQueries(["tasks"]);
  };

  if (isLoading) {
    return (
      <Box>
        <Typography>Loading...</Typography>
      </Box>
    );
  }
  if (error) {
    return (
      <Box>
        <Typography>Error...</Typography>
      </Box>
    );
  }
  return (
    <div>
      <Header count={data.filter((item) => !item.done).length} />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Form add={add} />
        <List>
          {data
            .filter((item) => !item.done)
            .map((item) => {
              return (
                <Item key={item.id} item={item} del={del} toggle={toggle} />
              );
            })}
        </List>
        <Divider />
        <List>
          {data
            .filter((item) => item.done)
            .map((item) => {
              return (
                <Item key={item.id} item={item} del={del} toggle={toggle} />
              );
            })}
        </List>
      </Container>
    </div>
  );
}
