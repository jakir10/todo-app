import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../todoContext/TodoContext";
import { FaTasks } from "react-icons/fa";

function DoneTodos() {
  const { todos, updateTodoStatus } = useContext(TodoContext);

  const doneTodos = todos.filter((todo) => todo.status === "done");

  return (
    <div>
      <h1 className="font-medium text-lg font-semibold text-center ">
        Done Todos
      </h1>
      <ul className="mt-5">
        {doneTodos.map((todo) => (
          <li key={todo._id}>
            <Link to={`/todo/${todo._id}`}>
              <strong>{todo.title}</strong>
            </Link>
            <button
              className="btn btn-outline btn-sm btn-info ml-2"
              onClick={() => updateTodoStatus(todo._id, "inProgress")}
            >
              <FaTasks />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoneTodos;
