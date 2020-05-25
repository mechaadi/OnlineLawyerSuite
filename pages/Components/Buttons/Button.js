
import button from './button.module.css'
const Button = React.forwardRef(({ onClick, href } , props ) => {
    return (
        <div>
            <button className= {button.btn}  onClick={onClick} href={href}>{props.name}</button>
        </div>
    )
})

export default Button
