import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import { fetchTodosStart } from "./todosReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosStart());
  }, [dispatch]);

  return (
    <Box>
      <Navbar />
      <Main />
    </Box>
  );
}

export default App;
