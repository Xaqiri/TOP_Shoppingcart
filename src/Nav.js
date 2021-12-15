import { Link, Outlet } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <nav>
                <ul className="nav-list">
                    <div className="nav-left">
                        <li><Link to="/">Home</Link></li>
                    </div>
                    <div className="nav-right">
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </div>
                </ul>
                
            </nav>
            <Outlet />
        </div>
    )
}

export default Nav;