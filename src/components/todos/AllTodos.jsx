import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../todoContext/TodoContext";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";

function AllTodos() {
  const { todos, updateTodoStatus } = useContext(TodoContext);

  // Filter todos with a status of null or "newtodo"
  const allTodos = todos.filter((todo) => todo.status === "newTodo");

  // Function to move a todo to a different status
  const moveTodo = (todoId, newStatus) => {
    updateTodoStatus(todoId, newStatus);
  };

  return (
    <div>
      <h1 className="font-medium text-lg font-semibold text-center mt-6">
        All Todos
      </h1>
      <ul className="mt-5">
        {allTodos.map((todo) => (
          <li key={todo._id}>
            <Link to={`/todo/${todo._id}`}>
              <strong>{todo.title}</strong>
            </Link>
            <button
              className="btn btn-outline btn-sm btn-info ml-2"
              onClick={() => moveTodo(todo._id, "inProgress")}
            >
              <FaTasks />
            </button>
            <button
              className="btn btn-outline btn-sm btn-success ml-2"
              onClick={() => moveTodo(todo._id, "done")}
            >
              <AiOutlineFileDone />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTodos;
