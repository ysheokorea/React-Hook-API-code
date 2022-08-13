import { Button, Container, Typography } from "@mui/material";
import React from "react";

export default function Students({ info, dispatch, id, isHere }) {
  return (
    <Container
      sx={{
        margin: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        mr={3}
        component={"span"}
        sx={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "gray" : "black",
          textAlign: "left",
        }}
        onClick={() => {
          dispatch({ type: "mark-student", payload: { id } });
        }}
      >
        {info.name}
      </Typography>
      <Button
        onClick={() => {
          dispatch({ type: "delete-student", payload: { id } });
        }}
        variant="contained"
        color="error"
      >
        삭제
      </Button>
    </Container>
  );
}
