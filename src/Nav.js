import { Link, Outlet } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <div id="nav">
            <nav>
                <ul id="nav-list">
                    <div id="nav-left">
                        <li><Link to="/">Home</Link></li>
                    </div>
                    <div id="nav-right">
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