import React from 'react'
import button from './button.module.css'
const Button = (props) => {
    // function handleClick() {
    //     onChildClick(event);
    //     console.log("Clicked");
    // }
    return (
        <div>
            <button onClick={props.function} className={button.btn}> {props.name} </button>
        </div>
    )
}

export default Button
