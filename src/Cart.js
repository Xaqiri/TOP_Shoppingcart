const Cart = ({cart}) => {
    let cartTotal = 0
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
              <div>Quantity: {food.quantity}</div>
            </div>
          )
      })}
      <div>Cart total: ${cartTotal}</div>
      </div>
    )
}


export default Cart;