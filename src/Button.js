import { Link } from 'react-router-dom'
import './Button.css';

const Button = ({ text }) => {
    return (
        <div className="button">
            <Link to="/cart">{text}</Link>
        </div>
    )
}

export default Button;