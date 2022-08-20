import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todosReducer from "./todosReducer";
import mySaga from "./mySaga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(mySaga);
