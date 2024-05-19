import { IMovie } from "@/types/movie";

export const filterMovies = (movies: IMovie[], searchTerm: string = "") => {
    return movies?.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm?.toLowerCase())
    );
  };
  
  export const sortMovies = (movies: IMovie[], sortType: string) => {
    return movies?.sort((a, b) => {
      if (sortType === "Most Upvoted") {
        return b.upvotes - a.upvotes;
      } else if (sortType === "Most Recent") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return 0;
      }
    });
  };