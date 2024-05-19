import { IMovie } from '@/types/movie';
import { filterMovies, sortMovies } from './movieUtils';

describe('movieUtils', () => {
  const movies = [
    { id: 1, title: 'Movie 1', upvotes: 2, date: new Date('2022-01-01') },
    { id: 2, title: 'Movie 2', upvotes: 3, date: new Date('2022-01-02') },
    { id: 3, title: 'Movie 3', upvotes: 1, date: new Date('2022-01-03') },
  ] as IMovie[];

  test('filterMovies', () => {
    const result = filterMovies(movies, '1');
    expect(result).toEqual([{ id: 1, title: 'Movie 1', upvotes: 2, date: new Date('2022-01-01') }]);
  });

  test('sortMovies by Most Upvoted', () => {
    const result = sortMovies(movies, 'Most Upvoted');
    expect(result).toEqual([
      { id: 2, title: 'Movie 2', upvotes: 3, date: new Date('2022-01-02') },
      { id: 1, title: 'Movie 1', upvotes: 2, date: new Date('2022-01-01') },
      { id: 3, title: 'Movie 3', upvotes: 1, date: new Date('2022-01-03') },
    ]);
  });

  test('sortMovies by Most Recent', () => {
    const result = sortMovies(movies, 'Most Recent');
    expect(result).toEqual([
      { id: 3, title: 'Movie 3', upvotes: 1, date: new Date('2022-01-03') },
      { id: 2, title: 'Movie 2', upvotes: 3, date: new Date('2022-01-02') },
      { id: 1, title: 'Movie 1', upvotes: 2, date: new Date('2022-01-01') },
    ]);
  });
});