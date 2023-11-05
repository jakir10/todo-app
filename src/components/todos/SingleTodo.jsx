import { Link, useLoaderData } from "react-router-dom";

const SingleTodo = () => {
  const todo = useLoaderData();
  const { title, description, status } = todo;

  let statusText = "";
  if (status === "newTodo") {
    statusText = "Status: New Task";
  } else if (status === "inProgress") {
    statusText = "Status: In Progress";
  } else if (status === "done") {
    statusText = "Status: Done";
  }

  return (
    <>
      <h1 className="text-3xl text-center mt-6 font-bold underline">
        Todos App
      </h1>

      <div className="flex items-center justify-center mt-4">
        <button
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          <Link to={`/`}>Home</Link>
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="card w-96 bg-sky-600 shadow-xl mb-48 text-white">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p>{statusText}</p> {/* Display the status here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
