import AddMovie from "./components/AddMovie";
import Table from "./components/table/Table";
import MovieProvider from "./lib/store/context/movieContext";

function App() {
  return (
    <MovieProvider>
      <main className="App flex justify-center items-center h-screen dark:bg-gray-900 bg-gray-100">
        <div className="w-2/4 p-4 mt-48">
          <AddMovie />
        </div>
        <div className="w-1/2 p-4">
          <Table />
        </div>
      </main>
    </MovieProvider>
  );
}

export default App;
