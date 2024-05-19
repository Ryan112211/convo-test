import { IMovie,MovieAction} from "@/types/movie";




export const movieReducer = (state: IMovie[], action: MovieAction): IMovie[] => {
    switch (action.type) {
      case 'ADD_MOVIE':
        return [...state, action.payload];

      case 'UPDATE_MOVIE':
        return state.map((movie) =>
       
          movie.id === action.payload ? { ...movie} : movie
          
        );

      case 'DELETE_MOVIE':
        return state.filter((movie) => movie.id !== action.payload);



      default:
        return state;
    }
};