import { Link } from 'react-router-dom'
import './Button.css';

const Button = ({ text, itemsInCart }) => {
    return (
        <div className="button">
            <Link to="/cart">{text} {itemsInCart}</Link>
        </div>
    )
}

export default Button;