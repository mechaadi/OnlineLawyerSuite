import Input_styles from './Input.module.css';
import React from 'react'
const Input = (props) => {
    return (
        <input type="text" autoComplete={props.autoComplete} type={props.type} onChange = {props.onChange} className={Input_styles.text_input} placeholder={props.placeholder}></input>
    )
}

export default Input
