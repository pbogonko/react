
import ProductComponent from "./productComponent";
import products from "./products";
products



function ProductListComponent({ searchTerm, selectedCategories }) {

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="product-list-component">
      
      {filteredProducts.map((product) => (
        <ProductComponent key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListComponent;
