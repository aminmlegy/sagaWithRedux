import { Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteItem, togoleStutes } from "../todosReducer";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItem(todo.id));
  };
  const handleCompolete = () => {
    dispatch(togoleStutes(todo.id));
  };
  return (
    <li>
      <Typography
        variant='subtitle1'
        gutterBottom
        style={todo.isComplete ? { textDecoration: "line-through" } : {}}>
        {todo.text}
      </Typography>
      <Button onClick={handleCompolete}>
        {todo.isComplete ? "uncomplete" : "complete"}
      </Button>
      <Button onClick={handleDelete}>Delete</Button>
    </li>
  );
};

export default TodoItem;
