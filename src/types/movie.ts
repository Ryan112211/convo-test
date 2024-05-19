


export interface IMovie {
    id: number;
    title: string;
    upvotes: number;
    date: Date;
    [key: string]: string | number | Date | undefined;
  }

  export interface IFormMovie {
    id?: number;
    title: string;
    upvotes: number;
    date: Date;
    [key: string]: string | number | Date | undefined;
  }


export type MovieAction =
| { type: 'ADD_MOVIE'; payload: IMovie }
| { type: 'UPDATE_MOVIE'; payload: IMovie }
|  { type: 'DELETE_MOVIE'; payload: number }
|
   { type: 'SET_MOVIES'; payload: IMovie[]}