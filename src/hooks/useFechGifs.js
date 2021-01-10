import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
export const useFechGifs = (category) => {
   const [state, setState] = useState({
      data: [],
      loading: true
   });
   useEffect(() => {
      getGifs(category)
         .then((img) => {
            setState({
               data: img,
               loading: false
            });
         });
   }, [category]);


   return state;
}
