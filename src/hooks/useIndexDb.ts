import React from 'react';
import { set, get } from 'idb-keyval';
import { IMovie } from '@/types/movie';

const useIndexedDB = (key:string, initialState:IMovie[], dispatch:any, movies:IMovie[]) => {
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        get(key).then((savedState) => {
          if (savedState && savedState.length) {
           
            dispatch({ type: "SET_MOVIES", payload: savedState });
          } else {
            dispatch({ type: "SET_MOVIES", payload: initialState });
          }
          setIsLoading(false);
        });
      }, []);
    
      React.useEffect(() => {
        if (!isLoading) {
          set(key, movies);
        }
      }, [movies,key, isLoading]);

};

export default useIndexedDB;