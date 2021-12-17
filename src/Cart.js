import './Cart.css'

const Cart = ({cart, cartSize, setCartSize}) => {
    let cartTotal = 0
    const decrement = (food) => {
        if (food.quantity > 1) {
            food.quantity -= 1;
            setCartSize(cartSize-1)
        } else if (food.quantity > 0) {
            removeFromCart(food);
        }
    }
    const increment = (food) => {
        food.quantity += 1;
        setCartSize(cartSize+1)
    }
    const removeFromCart = (food) => {
        food.quantity -= 1;
        setCartSize(cartSize-1)
        cart.splice(cart.indexOf(food), 1)
    }
    return (
    <div className="Cart">
      {cart.map(food => {
          let itemTotal = food.price*food.quantity
          cartTotal += itemTotal
          return (
            <div className="food" key={food.key}>
                <div>{food.name}</div>
                <div>{food.price}</div>
                <div>{food.size}</div>
                <div id="quantity">Quantity: 
                    <button className="changeQuantityBtn" onClick={() => decrement(food)}>-</button>
                    {food.quantity}
                    <button className="changeQuantityBtn" onClick={() => increment(food)}>+</button>
              </div>
            </div>
          )
      })}
      <div id="total">Cart total: ${cartTotal.toFixed(2)}</div>
      </div>
    )
}


export default Cart;