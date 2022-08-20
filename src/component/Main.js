import { Box, Grid, Paper, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../todosReducer";
import TodosList from "./TodosList";

const Main = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(
      addItem({
        text: inputText,
        isComplete: false,
      })
    );
  };
  return (
    <Box>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            style={{
              padding: "10px",
              display: "flex",
              gap: "18px",
            }}>
            <TextField
              id='filled-basic'
              label='Todo'
              variant='filled'
              onChange={handleInputChange}
              value={inputText}
            />
            <Button variant='contained' onClick={handleSubmit}>
              Add Todo
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0}>
            <TodosList todos={todos} />
          </Paper>
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <Paper elevation={0}></Paper>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Main;
