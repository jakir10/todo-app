import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../todoContext/TodoContext";
import { FaTasks } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";

function InProgressTodos() {
  const { todos, updateTodoStatus } = useContext(TodoContext);

  const inProgressTodos = todos.filter((todo) => todo.status === "inProgress");

  // Function to move a todo to "All Todos" with status "newTodo"
  const moveBackward = (todoId) => {
    updateTodoStatus(todoId, "newTodo");
  };

  return (
    <div>
      <h1 className="font-medium text-lg font-semibold text-center ">
        In Progress Todos
      </h1>
      <ul className="mt-5">
        {inProgressTodos.map((todo) => (
          <li key={todo._id}>
            <Link to={`/todo/${todo._id}`}>
              <strong>{todo.title}</strong>
            </Link>
            <button
              className="btn btn-outline btn-sm btn-success ml-2"
              onClick={() => updateTodoStatus(todo._id, "done")}
            >
              <AiOutlineFileDone />
            </button>
            <button
              className="btn btn-outline btn-sm btn-info ml-2"
              onClick={() => moveBackward(todo._id)}
            >
              <FaTasks />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InProgressTodos;
