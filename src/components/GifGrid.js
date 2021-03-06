import React from 'react'
import { PropTypes } from 'prop-types';
// import { getGifs } from '../helpers/getGifs';
import { useFechGifs } from '../hooks/useFechGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

   // const [images, setImages] = useState([]);
   const { data, loading } = useFechGifs(category);

   return (
      <>
         <h3>{category}</h3>
         {loading && <p>Loading</p>}
         {
            <div className="card-grid">
               {data.map((img) => {
                  return <GifGridItem
                     key={img.id}
                     {...img}
                  />
               })}
            </div>
         }
      </>
   );
}

GifGrid.propTypes = {
   category: PropTypes.string.isRequired
}