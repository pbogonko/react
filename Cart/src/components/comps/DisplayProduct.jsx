import { useState, useContext } from 'react';
import { CartContext } from './cartcontext';
import {redJ,blackJ,orangeJ} from '../../assets'
import CartItems from './cartitem'; 
import '../../App.css'
const DisplayProductComponent = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);
  const { addToCart } = useContext(CartContext);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    const productToAdd = { ...product, color: selectedColor };
    addToCart(productToAdd);
  };

  const getShoeImage = () => {
    switch (selectedColor.toLowerCase()) {
      case 'red':
        return redJ;
      case 'black':
        return blackJ;
      case 'orange':
        return orangeJ;
      default:
        return redJ; // Default image if color not matched
    }
  };

  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'row' }}>
      <div className='card'>
        <div className='card1' style={{ backgroundColor: selectedColor.toLowerCase(), padding: '20px', display: 'flex', flexDirection: 'row', gap: '20px', borderRadius: '20px' }}>
          <div className="cardproduct" style={{ border: 'solid 2px white', borderRadius: '20px' }}>
            <img className='shoe' src={getShoeImage()} alt={`${product.title} in ${selectedColor}`} />
          </div>
          <div>
            <h2>{product.title}</h2>
            <p>{product.collection}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {product.availableColors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                style={{ backgroundColor: color.toLowerCase() }}
              >
                {color}
              </button>
            ))}
            <button onClick={handleAddToCart} style={{ marginTop: '20px' }}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className='cardview2' style={{ flex: 1, backgroundColor: '#ccffdd', borderRadius: '20px' }}>
        {/* Render the CartItems component */}
        <CartItems />
      </div>
    </div>
  );
};

export default DisplayProductComponent;
