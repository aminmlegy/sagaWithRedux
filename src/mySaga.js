import { takeEvery, put, call, takeLatest, select } from "redux-saga/effects";
import {
  addItem,
  fetchTodosFailed,
  fetchTodosStart,
  fetchTodosSuccess,
  updateLastTodoId,
  deleteItem,
  togoleStutes,
} from "./todosReducer";

const getTodos = (state) => state.todos;

export function* handleFetchTodosStart() {
  try {
    const response = yield call(() =>
      fetch("https://todos-9062f-default-rtdb.firebaseio.com/todos.json")
    );
    const todos = yield response.json();

    const updateTodos = [];

    for (const [key, value] of Object.entries(todos)) {
      updateTodos.push({ ...value, id: key });
    }

    yield put(fetchTodosSuccess(updateTodos));
  } catch (error) {
    yield put(fetchTodosFailed(error.message));
  }
}

function* handleAddItem(action) {
  const Todo = action.payload;
  console.log(Todo);

  const response = yield call(() =>
    fetch("https://todos-9062f-default-rtdb.firebaseio.com/todos.json", {
      method: "POST",
      body: JSON.stringify(Todo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
  );

  console.log(response);

  const todoId = yield response.json();
  yield put(updateLastTodoId(todoId));
}
function* handleDeleteItem(action) {
  try {
    const todoId = action.payload;

    const response = yield call(() =>
      fetch(
        `https://todos-9062f-default-rtdb.firebaseio.com/todos/${todoId}.json`,
        {
          method: "DELETE",
        }
      )
    );
  } catch (error) {
    yield put(fetchTodosFailed(error.message));
  }
}
function* handleStatusItem(action) {
  try {
    const itemId = action.payload;

    const { todos } = yield select(getTodos);

    const updatedTodo = todos.find((item) => item.id === itemId);

    yield call(() =>
      fetch(
        `https://todos-9062f-default-rtdb.firebaseio.com/todos/${itemId}.json`,
        {
          method: "PATCH",
          body: JSON.stringify(updatedTodo),
        }
      )
    );
  } catch (error) {
    console.log(error.message);
  }
}
export default function* watchSaga() {
  yield takeEvery(fetchTodosStart.toString(), handleFetchTodosStart);
  yield takeLatest(addItem.toString(), handleAddItem);
  yield takeLatest(deleteItem.toString(), handleDeleteItem);
  yield takeLatest(togoleStutes.toString(), handleStatusItem);
}
