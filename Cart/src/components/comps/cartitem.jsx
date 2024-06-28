// CartItems.js
import { useContext } from "react";
import { CartContext } from "./cartcontext";

const CartItems = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate total number of items in the cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <h3>Cart Items ({totalItems}):</h3>
      {cartItems.map((item, index) => (
        <div key={index}>
          <h4>
            {item.title} - {item.color}
          </h4>
          <p>Price: ${item.price * item.quantity}</p>
          <p>Quantity: {item.quantity}</p>
          <div className="btns">
            <button onClick={() => updateQuantity(item, -1)}>-</button>
            <button onClick={() => updateQuantity(item, 1)}>+</button>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
