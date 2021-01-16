import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ({ defaultCategories = [] }) => {
   const [categories, setCategories] = useState(defaultCategories);

   return (
      <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories={setCategories} />
         <hr />
         <ol>
            {
               categories.map((cat) => {
                  return <GifGrid
                     key={cat}
                     category={cat}>

                  </GifGrid>
               })
            }
         </ol>
      </>
   )
}
