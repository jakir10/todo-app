// TodoContext.js
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API using Axios
    axios
      .get("https://todo-server-one-iota.vercel.app/allTodos/") // Replace with your API endpoint
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const updateTodoStatus = (todoId, status) => {
    // Update the status of the todo in the database using Axios
    axios
      .put(`https://todo-server-one-iota.vercel.app/allTodos/${todoId}`, {
        status,
      }) // Replace with your API endpoint
      .then((response) => {
        // Update the local todos state with the updated status
        const updatedTodos = todos.map((todo) =>
          todo._id === todoId ? { ...todo, status } : todo
        );
        setTodos(updatedTodos);
      })
      .catch((error) => {
        console.error("Error updating todo status:", error);
      });
  };

  return (
    <TodoContext.Provider value={{ todos, updateTodoStatus }}>
      {children}
    </TodoContext.Provider>
  );
};
