import { useState, useEffect } from 'react'
import './Cart.css'

const Cart = ({cart, cartSize, setCartSize}) => {
    let cartTotal = 0
    const decrement = (food) => {
        if (food.quantity > 1) {
            food.quantity -= 1;
            setCartSize(cartSize-1)
        }
    }
    const increment = (food) => {
        food.quantity += 1;
        setCartSize(cartSize+1)
    }
    const removeFromCart = () => {
        
    }
    return (
    <div className="App">
      {cart.map(food => {
          let itemTotal = food.price*food.quantity
          cartTotal += itemTotal
          return (
            <div className="food" key={food.key} onClick={removeFromCart}>
              <div>{food.name}</div>
              <div>{food.price}</div>
              <div>{food.size}</div>
              <div id="quantity">Quantity: 
                <button onClick={() => decrement(food)}>-</button>
                {food.quantity}
                <button onClick={() => increment(food)}>+</button>
              </div>
            </div>
          )
      })}
      <div id="total">Cart total: ${cartTotal}</div>
      </div>
    )
}


export default Cart;