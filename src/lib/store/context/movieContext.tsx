import * as React from "react";
import { IFormMovie, IMovie, MovieAction } from "@/types/movie";
import { movieReducer } from "../reducers/movieReducer";
import useIndexedDB from "@/hooks/useIndexDb";

export const MovieContext = React.createContext<{
  movies: IMovie[];
  dispatch: React.Dispatch<MovieAction>;
  formData: IFormMovie;
  setFormData: React.Dispatch<React.SetStateAction<IFormMovie>>;
} | null>(null);

const MovieProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialState = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      upvotes: 40,
      date: new Date("1994"),
    },
    {
      id: 2,
      title: "The Godfather",
      upvotes: 20,
      date: new Date("1972"),
    },
    {
      id: 3,
      title: "The Dark Knight",
      upvotes: 10,
      date: new Date("2008"),
    },
  ];
  const [movies, dispatch] = React.useReducer(movieReducer, initialState);

  const [formData, setFormData] = React.useState<IFormMovie>({
    title: "",
    upvotes: 0,
    date: new Date(),
  });

  useIndexedDB("movies", initialState, dispatch, movies);

  return (
    <MovieContext.Provider value={{ movies, dispatch, formData, setFormData }}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieProvider;
