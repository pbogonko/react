// import "./App.css";
// import { CartProvider } from "./components/CartContext";
// import ProductList from "./components/ProductList";
// import Cart from "./components/Cart";
// import Total from "./components/Total";

// function App() {
//   return (
//     <CartProvider>
//       <h2>Shopping cart app </h2>
//       <div className="App">
//         <div className="prod-list">
//           <ProductList />
//         </div>

//         <div className="cart">
//           <Total />
//           <Cart />
//         </div>
//       </div>
//     </CartProvider>
//   );
// }

// export default App;


import './App.css';
import DisplayProductComponent from './components/comps/DisplayProduct'
import { initialProducts } from './components/comps/initialproducts';
import { CartProvider } from './components/comps/cartcontext';
function App() {

  return (
    <CartProvider>
      {initialProducts.map((product) => (
        <DisplayProductComponent key={product.productID} product={product}/>
      ))}
    </CartProvider>
  );
}

export default App;
