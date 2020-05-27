import React from 'react'
import button from './button.module.css'
import Link from 'next/link'
const Light_Button =  (props ) => {
    return (
        <div>
            <button className={ button.light_button} >{props.name}</button>
        </div>
    )
}

export default Light_Button