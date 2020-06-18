import React from 'react'
import button from './button.module.css'
const Button = ({name , props}) => {
   function handleClick(){
       console.log("Clicked");
    }
    return (
        <div>
            <button onClick={props} className={button.btn}>{name}</button>
        </div>
    )
}

export default Button
