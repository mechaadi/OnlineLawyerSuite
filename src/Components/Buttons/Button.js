
import button from './button.module.css'
const Button = (props) => {
    return (
        <div>
            <button className={button.btn} >{props.name}</button>
        </div>
    )
}

export default Button
