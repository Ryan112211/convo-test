export type TodoAction =
| { type: 'ADD_TODO'; payload: ITodo }
| { type: 'UPDATE_TODO'; payload: number };


export interface ITodo {
    id: number;
    title: string;
    description: string;
    status: boolean;
  }

export interface IMovie {
    id: number;
    title: string;
    upvoted: number;
    date: Date;
  }


export type MovieAction =
| { type: 'ADD_MOVIE'; payload: IMovie }
| { type: 'UPDATE_MOVIE'; payload: number }
|  { type: 'DELETE_MOVIE'; payload: number };