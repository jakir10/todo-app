import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../todoContext/TodoContext";
import { FaArrowLeft } from "react-icons/fa";

function DoneTodos() {
  const { todos, updateTodoStatus } = useContext(TodoContext);

  const doneTodos = todos.filter((todo) => todo.status === "done");

  return (
    <div>
      <h1 className="font-medium text-lg font-semibold text-center">
        Done Todos
      </h1>
      <ul className="mt-5">
        {doneTodos.map((todo, index) => (
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
                onClick={() => updateTodoStatus(todo._id, "inProgress")}
              >
                <FaArrowLeft />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoneTodos;
