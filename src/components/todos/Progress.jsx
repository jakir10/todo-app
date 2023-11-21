import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../todoContext/TodoContext";
import { MdTaskAlt } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

function InProgressTodos() {
  const { todos, updateTodoStatus } = useContext(TodoContext);

  const inProgressTodos = todos.filter((todo) => todo.status === "inProgress");

  // Function to move a todo to "All Todos" with status "newTodo"
  const moveBackward = (todoId) => {
    updateTodoStatus(todoId, "newTodo");
  };

  return (
    <div>
      <h1 className="font-medium text-lg font-semibold text-center">
        In Progress Todos
      </h1>
      <ul className="mt-5">
        {inProgressTodos.map((todo, index) => (
          <li className="flex m-1 space-x-20 items-center" key={todo._id}>
            <div className="w-1/2">
              <span className="font-bold mr-2">{index + 1}.</span>
              <Link to={`/todo/${todo._id}`}>
                <strong>{todo.title}</strong>
              </Link>
            </div>
            <div className="w-1/2">
              <button
                className="btn btn-outline btn-sm btn-info ml-2"
                onClick={() => moveBackward(todo._id)}
              >
                <FaArrowLeft />
              </button>
              <button
                className="btn btn-outline btn-sm btn-success ml-2"
                onClick={() => updateTodoStatus(todo._id, "done")}
              >
                <MdTaskAlt />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InProgressTodos;
