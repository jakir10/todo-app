import "./App.css";
import AddTask from "./components/addTask";
import AllTodos from "./components/todos/AllTodos";
import Done from "./components/todos/Done";
import Progress from "./components/todos/Progress";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl text-center mt-6 font-bold underline p-4 bg-white shadow-md">
        Todos App
      </h1>
      <AddTask />
      <div className="flex flex-col md:flex-row justify-center items-start mt-6 p-4 space-y-5 md:space-x-5">
        <div className="md:w-1/3 sticky top-16">
          <AllTodos />
        </div>
        <div className="md:w-1/3 sticky top-16">
          <Progress />
        </div>
        <div className="md:w-1/3 sticky top-16">
          <Done />
        </div>
      </div>
    </div>
  );
}

export default App;
