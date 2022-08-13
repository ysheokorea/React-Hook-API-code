import { Box, Container, Stack } from "@mui/material";
import React from "react";

export default function Page() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: "100%" }}>
      <Container
        sx={{ backgroundColor: "#F00", width: "300px", height: "100%" }}
      >
        Container
      </Container>
      <Box sx={{ backgroundColor: "#0F0", width: "300px", height: "100%" }}>
        Box
      </Box>
      <Stack sx={{ backgroundColor: "#00F", width: "300px", height: "100%" }}>
        Stack
      </Stack>
    </Box>
  );
}
