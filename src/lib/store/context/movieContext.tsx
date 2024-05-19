// context/todoContext.tsx

import * as React from 'react';
import { IMovie, MovieAction} from '@/types/movie';
import { movieReducer } from '../reducers/movieReducer';


export const TodoContext = React.createContext<{
  movies: IMovie[];
  dispatch: React.Dispatch<MovieAction>;
} | null>(null);

const MovieProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [movies, dispatch] = React.useReducer(movieReducer, [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      upvoted: 0,
      date: new Date('1994'),
    },
    {
      id: 2,
      title: 'The Godfather',
      upvoted: 0,
      date: new Date('1972'),
    },
    {
      id: 3,
      title: 'The Dark Knight',
      upvoted: 0,
      date: new Date('2008'),
    },
   
  ]);
  return (
    <TodoContext.Provider value={{ movies, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
export default MovieProvider;