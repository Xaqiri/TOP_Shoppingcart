import { Link } from 'react-router-dom'
import './Button.css';

const Button = ({ text, cartSize }) => {
    return (
        <div className="btn">
            <Link to="/cart">{text} {cartSize}</Link>
        </div>
    )
}

export default Button;