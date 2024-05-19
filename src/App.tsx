import AddTodo from "./components/AddMovie";
import Todos from "./components/containers/Movies";
import TodoProvider from "./lib/store/context/movieContext";

function App() {
  return (
    <TodoProvider>
      <main className='App flex'>
        <div className='w-1/2 p-4'>
          <h1>Add Movie</h1>
          <AddTodo />
        </div>
        <div className='w-1/2 p-4'>
          <h1>My Movies</h1>
          <Todos />
        </div>
      </main>
    </TodoProvider>
  );
}

export default App;