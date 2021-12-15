import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from './Nav.js';
import Shop from './Shop.js';
import Home from './Home.js';
import Cart from './Cart.js';
import Button from './Button.js';

const RouteSwitch = () => {
    const [cart, setCart] = useState([]);
    const [cartSize, setCartSize] = useState(0);
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} exact/>
                <Route path="/shop" element={<Shop cart={cart} addToCart={setCart} cartSize={cartSize} setCartSize={setCartSize}/>}/>
                <Route path="/cart" element={<Cart cart={cart} cartSize={cartSize} setCartSize={setCartSize}/>}/>
            </Routes>
            <Button text="Cart" itemsInCart={cartSize}/>
        </BrowserRouter>
    )
}

export default RouteSwitch;