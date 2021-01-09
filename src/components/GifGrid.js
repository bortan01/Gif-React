import React from 'react'

export const GifGrid = ({category}) => {

   const getGifs =async ()=>{
      const url ='https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=R4qK3NSI73RXvjZSdZ8hCDYXSfEq0xSj';
      const respuesta = await fetch(url);
      const {data} = await respuesta.json();

      const gifs = data.map((img)=>{
         return {
            id : img.id,
            url : img.images?.downsized_medium.url,
            title : img.title
         }
      });
      console.log(gifs);
   }
   getGifs();
   return (
      <div>
         <h3>{category}</h3>
      </div>
   )
}
