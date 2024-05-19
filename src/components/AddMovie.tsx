import { TodoContext } from '@/lib/store/context/movieContext';
import { IMovie } from '@/types/movie';
import * as React from 'react';

const AddMovie: React.FC = () => {
  const { dispatch } = React.useContext(TodoContext)!;
  const [formData, setFormData] = React.useState<IMovie | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveTodo = (e: React.FormEvent, formData: IMovie | any) => {
    e.preventDefault();
    dispatch({ type: 'ADD_MOVIE', payload: formData });
  };

  return (
    <div className="flex ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => handleSaveTodo(e, formData)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Title</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleForm} type="text" id="title" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="upvoted">Upvotes</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleForm} type="number" id="upvoted" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleForm} type="date" id="date" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Add Movie</button>
        </div>
      </form>
    </div>
  );
};
export default AddMovie;