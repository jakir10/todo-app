import { useState } from "react";
import axios from "axios";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    // Create a task object with the title and description
    const newTask = {
      title,
      description,
      status: "newTodo",
    };

    // Send the task data to your backend using Axios
    axios
      .post("https://todo-server-one-iota.vercel.app/allTodos", newTask) // Replace with your API endpoint
      .then((response) => {
        // Handle a successful response (e.g., show a success message)
        console.log("Task added successfully:", response.data);

        // Clear the input fields after successful submission
        setTitle("");
        setDescription("");

        // Close the modal
        document.getElementById("my_modal_3").close();

        // Refresh the page (you might use a different approach to refresh your data)
        window.location.reload();
      })

      .catch((error) => {
        // Handle errors (e.g., display an error message)
        console.error("Error adding task:", error);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center mt-6">
        <button
          className="btn btn-info"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Create Task
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-black text-white">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>
              <p className="font-bold text-md -my-2 m-4">Create Task</p>
            </form>
            <div className="w-full md:w-1/2 lg:w-full p-4 mx-auto">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-end">
                  <button
                    className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleAddTask}
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default AddTask;
