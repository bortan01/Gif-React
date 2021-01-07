import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {
   const [categories, setCategories] = useState(['one punch', 'Samuray X', 'goku']);
   // const categories = ['one punch', 'Samuray X', 'goku'];
   // const handleAdd = () => {
   //    setCategories([...categories, 'one piece']);
   // setCategories(['one piece', ...categories]);
   // setCategories((cats) =>  [...cats, 'one piece'] );
   //};

   return (
      <>
         <h2>GifExpertApp</h2>
        <AddCategory/>
         <hr />
         <ol>
            {
               categories.map((cat) => {
                  return <li key={cat} >hola  {cat}</li>
               })
            }
         </ol>
      </>
   )
}
