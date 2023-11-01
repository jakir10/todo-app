import "./App.css";
import AddTask from "./components/addTask";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl text-center mt-6 font-bold underline">
          Todos App
        </h1>
        <AddTask />
      </div>
    </>
  );
}

export default App;
