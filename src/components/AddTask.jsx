const AddTask = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-6">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-info"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Create Task
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-black text-white">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <p className="font-bold text-md -my-2 ">Create Task</p>
            </form>
            {/* <p className="font-bold text-md -my-2">Create Task!</p> */}
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
                  />
                </div>
                <div className="flex items-center justify-end">
                  <button
                    className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Create
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
