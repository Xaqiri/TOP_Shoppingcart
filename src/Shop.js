import './Shop.css';

const foods = [
  {
    "name": "Milk",
    "price": "4.49",
    "size": "1 gallon",
    "key": 0
  },
  {
    "name": "Eggs",
    "price": "1.00",
    "size": "12",
    "key": 1
  }, 
  {
    "name": "Bacon",
    "price": "3.49",
    "size": "16",
    "key": 2
  },
  {
    "name": "Sausage",
    "price": "2.99",
    "size": "12",
    "key": 3
  },
  {
    "name": "Milk",
    "price": "2.49",
    "size": ".5 gallon",
    "key": 4
  },
  {
    "name": "Shredded Cheese",
    "price": "2.49",
    "size": "16oz",
    "key": 5
  }
]


function Shop({cart, addToCart, cartSize, setCartSize}) {
  const handleClick = food => {
    let f = food
    if (cart.indexOf(food) === -1) {
      f.quantity = 1
      addToCart([...cart, f]);
    } else {
      cart[cart.indexOf(food)].quantity += 1;
    }
    setCartSize(cartSize+1)
  }
  return (
    <div className="App">
      {foods.map(food => {
          return (
            <div className="food" key={food.key}>
              <div>{food.name}</div>
              <div>{food.price}</div>
              <div>{food.size}</div>
              <button onClick={() => handleClick(food)}>Add to cart</button>
            </div>
          )
      })}
      {console.log(cart)}
    </div>
  );
}

export default Shop;
