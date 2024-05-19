import useDebounce from "@/hooks/useDebounce";
import { MovieContext } from "@/lib/store/context/movieContext";
import movieColumns from "@/utils/columns";
import React from "react";
import Modal from "../modal/Modal";
import { filterMovies, sortMovies } from "@/utils/movieUtils";

const Table = () => {
  const { movies, dispatch, setFormData, formData } =
    React.useContext(MovieContext)!;
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortType, setSortType] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const handleUpdate = (movieId: number) => {
    const movie = movies.find((movie) => movie.id === movieId);
    if (!movie) return;
    setFormData(movie);
  };

  const handleView = (movieId: number) => {
    const movie = movies.find((movie) => movie.id === movieId);
    if (!movie) return;
    setFormData(movie);
    setOpen(true);
  };

  const handleDelete = (movieId: number) => {
    const movie = movies.find((movie) => movie.id === movieId);
    if (!movie) return;
    setFormData(movie);
    setDeleteOpen(true);
  };

  const handleDeleteMovie = (movieId: number) => {
    dispatch({ type: "DELETE_MOVIE", payload: movieId });
    setDeleteOpen(false);
  };

  const filteredMovies =
    debouncedSearchTerm?.length >= 3
      ? filterMovies(movies || [], debouncedSearchTerm)
      : movies;
  const sortedMovies = sortMovies(filteredMovies || [], sortType);
  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search the record..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="shadow appearance-none border rounded w-3/5 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4 flex justify-center items-center">
        <span className="mr-2 uppercase font-bold text-xs text-gray-500">
          Sort by:
        </span>
        <button
          onClick={() => setSortType("Most Upvoted")}
          className="bg-green-500 text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Most Upvoted
        </button>
        <button
          onClick={() => setSortType("Most Recent")}
          className="bg-green-500 text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Most Recent
        </button>
      </div>

      <div className="relative overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-800 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {movieColumns.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {column}
                </th>
              ))}
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {sortedMovies.map((movie, index) => (
              <tr key={index}>
                {movieColumns.map((column, index) => (
                  <td key={index} className="px-6 py-4 whitespace-nowrap">
                    {column === "date"
                      ? new Date(movie[column]).toLocaleDateString()
                      : String(movie[column])}{" "}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => handleView(movie.id!)}
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleUpdate(movie.id!)}
                    className="bg-green-500 text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    data-testid={`delete-${movie.id}`}
                    onClick={() => {
                      handleDelete(movie.id!);
                    }}
                    className="bg-red-500 text-xs hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="px-4 py-2 bg-white sm:p-6 w-[500px]">
          <h3 className="text-lg font-bold text-gray-800 text-center mb-4">
            Movie Details
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-between my-2">
            <span className="font-semibold text-gray-600">Title</span>
            <span className="text-gray-800 mt-2 sm:mt-0">{formData.title}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between my-2">
            <span className="font-semibold text-gray-600">Upvotes</span>
            <span className="text-gray-800 mt-2 sm:mt-0">
              {formData.upvotes}
            </span>
          </div>
        </div>
      </Modal>

      <Modal open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <div className="px-4 py-2 bg-white sm:p-6 w-[500px]">
          <h3 className="text-lg font-bold text-gray-800 text-center mb-4">
            Delete Movie
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-between my-2">
            <h1 className="text-gray-500">
              Are you sure you want to delete {formData.title!} ?
            </h1>
          </div>

          <div className="flex justify-end mt-10">
            <button
              data-testid="confirm-delete"
              onClick={() => handleDeleteMovie(formData.id!)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Table;
