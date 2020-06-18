import React from 'react'
import button from './button.module.css'
const Button = ({name, onChildClick}) => {
   function handleClick(){
       console.log("Clicked");
    }
    return (
        <div>
            <button onClick={handleClick} className={button.btn}>{name}</button>
        </div>
    )
}

export default Button
