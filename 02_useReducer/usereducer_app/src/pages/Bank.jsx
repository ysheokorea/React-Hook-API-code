import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BasicSpeedDial from "../components/Dial";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import React, { useReducer, useState } from "react";
import { Box, Input, InputBase, Stack, Typography } from "@mui/material";

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  console.log("dispatch가 작동했습니다.", state, action);
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

export default function Bank() {
  const [balance, setBalance] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <Container maxWidth="xl">
        <Card variant="contained" bgcolor="primary">
          <Typography mt={10} variant="h4" textAlign="center">
            AboutTech 은행에 온신 걸 환영합니다.
          </Typography>
          <hr />
        </Card>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card
            variant="contained"
            sx={{
              margin: 3,
              padding: 3,
              display: "flex",
              width: "400px",
              bgcolor: "#10F1",
              flexDirection: "column",
              justifyContent: "left",
              border: "5px solid #111111",
            }}
          >
            <Typography variant="h5" textAlign="left">
              당신의 잔고는 {money}원 입니다.
            </Typography>
            <input
              type="number"
              id="standard-basic"
              color="secondary"
              style={{ width: "100%" }}
              onChange={(e) => setBalance(parseInt(e.target.value))}
              step="100"
            />
            <br></br>
            <Stack
              direction="row"
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Button
                onClick={() => {
                  dispatch({ type: ACTION_TYPES.deposit, payload: balance });
                }}
                variant="contained"
              >
                예금
              </Button>
              <Button
                onClick={() => {
                  dispatch({ type: ACTION_TYPES.withdraw, payload: balance });
                }}
                variant="contained"
              >
                출금
              </Button>
            </Stack>
          </Card>
        </Box>
      </Container>
      <BasicSpeedDial />
    </>
  );
}
