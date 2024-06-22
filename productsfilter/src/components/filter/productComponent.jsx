
function ProductComponent({ product }) {
  const { name, category, price } = product;

  return (
    <div className="product-component">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Price: ksh{price}</p>
    </div>
  );
}

export default ProductComponent;

