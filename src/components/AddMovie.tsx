import { MovieContext } from "@/lib/store/context/movieContext";
import { IMovie } from "@/types/movie";
import * as React from "react";

const AddMovie: React.FC = () => {
  const { dispatch, formData, setFormData } = React.useContext(MovieContext)!;

  const inputStyle =
    "shadow appearance-none border rounded-lg h-12 w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700";

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveMovie = (e: React.FormEvent, formData: IMovie | any) => {
    e.preventDefault();
    if (formData.id) {
      dispatch({ type: "UPDATE_MOVIE", payload: formData });
      setFormData({ title: "", upvotes: 0, date: new Date() });
    } else {
      dispatch({
        type: "ADD_MOVIE",
        payload: { ...formData, id: Math.random() },
      });
      setFormData({ title: "", upvotes: 0, date: new Date() });
    }
  };

  return (
    <div className="w-3/4 p-4">
      <form
        className="bg-white dark:bg-gray-800  shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => handleSaveMovie(e, formData)}
      >
        <h3 className="text-lg text-gray-800 dark:text-gray-100 font-bold mb-4">
          {formData.id ? "Edit Record" : "Add Record"}
        </h3>
        <div className="mb-4">
          <input
            className={inputStyle}
            onChange={handleForm}
            placeholder="Title"
            type="text"
            id="title"
            value={formData.title || ""}
          />
        </div>
        <div className="mb-4">
          <input
            max={100}
            min={0}
            className={inputStyle}
            placeholder="Upvotes"
            onChange={handleForm}
            type="number"
            id="upvotes"
            value={formData.upvotes || ""}
          />
        </div>
        <div className="mb-6">
          <input
            className={inputStyle}
            onChange={handleForm}
            placeholder="Date"
            type="date"
            id="date"
            value={
              formData.date
                ? new Date(formData.date).toISOString().split("T")[0]
                : ""
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            {formData.id ? "Edit Data" : "Add Data"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddMovie;
