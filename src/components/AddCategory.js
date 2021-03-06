import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
   const [inputValue, setInputValue] = useState("");
   const handleInputChance = (e) => {
      console.log("llamado el change")
      setInputValue(e.target.value);
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submit");
      if (inputValue.trim().length > 2) {
         setCategories((categorias) => [inputValue, ...categorias]);
         setInputValue('');
      }
   }
   return (
      <form onSubmit={handleSubmit}>
         <p>{inputValue}</p>
         <input
            type="text"
            value={inputValue}
            onChange={(e) => { handleInputChance(e) }}
         />
      </form>
   )
}

AddCategory.propTypes = {
   setCategories: PropTypes.func.isRequired
}