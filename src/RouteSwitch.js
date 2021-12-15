import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav.js';
import Shop from './Shop.js';
import Home from './Home.js';
import Cart from './Cart.js';
import Button from './Button.js';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} exact/>
                <Route path="/shop" element={<Shop />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
            <Button text="Cart"/>
        </BrowserRouter>
    )
}

export default RouteSwitch;