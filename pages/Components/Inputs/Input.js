import Input_styles from './Input.module.css';
const Input = (props) => {
    return (
        <input type="text" autoComplete={props.autoComplete} type={props.type} className={Input_styles.text_input} placeholder={props.placeholder}></input>
    )
}

export default Input
