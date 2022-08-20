import TodoItem from "./TodoItem";

const TodosList = ({ todos }) => {
  const uncompletedTodos = todos.filter((todo) => !todo.isComplete);
  const completedTodos = todos.filter((todo) => todo.isComplete);

  return (
    <div>
      <ul>
        {uncompletedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
      <ul>
        {completedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
