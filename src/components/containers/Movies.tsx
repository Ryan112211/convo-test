// containers/Todos.tsx

import { TodoContext } from '@/lib/store/context/movieContext';
import { IMovie} from '@/types/movie';

import * as React from 'react';
import Movie from '../Movie';

const Movies = () => {
  const { movies, dispatch } = React.useContext(TodoContext)!;
  return (
    <>
      {movies.map((movie: IMovie) => (
        <Movie key={movie.id} updateMovie={() => dispatch({ type: 'UPDATE_MOVIE', payload: movie.id })} movie={movie} />
      ))}
    </>
  );
};
export default Movies;