
import button from './button.module.css'
const Button = ({name, onChildClick}) => {
   function handleClick(){
        onChildClick(event)
    }
    return (
        <div>
            <button onClick={handleClick} className={button.btn}>{name}</button>
        </div>
    )
}

export default Button
