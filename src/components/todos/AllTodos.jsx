import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../todoContext/TodoContext";
import { MdTaskAlt } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

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
      <h1 className="font-medium text-lg font-semibold text-center">
        All Todos
      </h1>
      <ul className="mt-5">
        {allTodos.map((todo, index) => (
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
                onClick={() => moveTodo(todo._id, "inProgress")}
              >
                <FaArrowRight />
              </button>
              <button
                className="btn btn-outline btn-sm btn-success ml-2"
                onClick={() => moveTodo(todo._id, "done")}
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

export default AllTodos;
