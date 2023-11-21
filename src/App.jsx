import "./App.css";
import AddTask from "./components/addTask";
import AllTodos from "./components/todos/AllTodos";
import Done from "./components/todos/Done";
import Progress from "./components/todos/Progress";

function App() {
  return (
    <div className="container mx-auto my-3 p-3 bg-gray-100">
      <h1 className="text-3xl text-center mt-6 font-bold underline p-4 bg-white shadow-md">
        Todos App
      </h1>
      <AddTask />
      <div className="flex flex-wrap gap-4 md:grid md:grid-cols-3 sm:grid-cols-2 justify-center items-start mt-6 p-4 space-x-5">
        <div className="flex-1 mb-4 md:mb-0">
          <div className="p-4 bg-white shadow-md">
            <AllTodos />
          </div>
        </div>
        <div className="flex-1 mb-4 md:mb-0">
          <div className="p-4 bg-white shadow-md">
            <Progress />
          </div>
        </div>
        <div className="flex-1 mb-4 md:mb-0">
          <div className="p-4 bg-white shadow-md">
            <Done />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
