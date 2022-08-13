import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BasicSpeedDial from "../components/Dial";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useReducer, useState } from "react";
import { Box, Input, InputBase, Stack, Typography } from "@mui/material";
import Students from "../components/Students";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "delete-student":
      const filteredStudents = state.students.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        count: state.count - 1,
        students: filteredStudents,
      };
    case "mark-student":
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

export default function School() {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(0);

  useEffect(() => {}, [studentInfo]);

  return (
    <>
      <Container maxWidth="xl">
        <Card variant="contained" bgcolor="primary">
          <Typography mt={10} variant="h4" textAlign="center">
            AboutTech대학 출석부
          </Typography>
          <hr />
        </Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#AFA0AF",
          }}
        >
          <Card
            variant="contained"
            sx={{
              margin: 3,
              padding: 3,
              display: "flex",
              width: "400px",
              bgcolor: "#10F1",
              flexDirection: "column",
              justifyContent: "center",
              border: "5px solid #111111",
            }}
          >
            <Typography mb={2} variant="h5" textAlign="left">
              총 학생수는 {studentInfo.count}명입니다.
            </Typography>
            <input
              type="text"
              id="standard-basic"
              color="secondary"
              style={{ width: "100%" }}
              onChange={(e) => setName(e.target.value)}
              step="100"
            />
            <br />

            <Button
              onClick={() => {
                dispatch({ type: "add-student", payload: { name } });
              }}
              variant="contained"
              color="success"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  dispatch({ type: "add-student", payload: { name } });
                }
              }}
            >
              추가
            </Button>
          </Card>
          <Card
            variant="contained"
            sx={{
              margin: 3,
              padding: 3,
              display: "flex",
              width: "400px",
              bgcolor: "#10F1",
              flexDirection: "column",
              justifyContent: "center",
              border: "5px solid #111111",
            }}
          >
            {studentInfo.students.map((item, idx) => {
              return (
                <Students
                  dispatch={dispatch}
                  id={item.id}
                  info={item}
                  key={idx}
                  isHere={item.isHere}
                />
              );
            })}
          </Card>
        </Box>
      </Container>
      <Typography variant="h3">{name}</Typography>
      <BasicSpeedDial />
    </>
  );
}
