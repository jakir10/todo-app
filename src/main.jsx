import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleTodo from "./components/todos/SingleTodo.jsx";
import { TodoProvider } from "./components/todoContext/TodoContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todo/:id",
    element: <SingleTodo />,
    loader: ({ params }) =>
      fetch(`https://todo-server-one-iota.vercel.app/allTodos/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
    </TodoProvider>
  </React.StrictMode>
);
