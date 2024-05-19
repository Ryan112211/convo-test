// components/Todo.tsx



import { IMovie } from '@/types/movie';
import * as React from 'react';


type Props = {
  movie: IMovie;
  updateMovie: () => void;
};
const Movie: React.FC<Props> = ({ movie, updateMovie }) => {
  

  return (
    <div className="Card">
      <div className="Card--text">
        <h1 >{movie.title}</h1>
        <span >{movie.upvoted}</span>
      </div>
      <button onClick={() => updateMovie()} >
       Edit
      </button>
    </div>
  );
};
export default Movie;