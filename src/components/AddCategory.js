import React,{useState} from 'react'


export const AddCategory = () => {
   const [inputValue, setInputValue] = useState("hola mundo");
   const handleInputChance = (e)=>{
      console.log(e.target.value);
      setInputValue(e.target.value);
   }
   const handleSubmit = (e)=>{
      e.preventDefault();
      console.log("submit")
   }
   return (
      <form onSubmit= {handleSubmit}>
         <input
            type="text"
            value = {inputValue}
            onChange = {(e)=>{handleInputChance(e)}}
         />
      </form>
   )
}
