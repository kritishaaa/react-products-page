import React, { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const handleViewClick = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow p-4 flex flex-col items-center">
            <img className="w-32 h-32 object-cover mb-4" src={product.thumbnail} alt={product.title} />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">${product.price}</p>
            <div className="flex justify-between space-x-2 mt-auto">
              <button
                onClick={() => handleViewClick(product)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                View
              </button>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {showDetails && selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={handleCloseDetails} addToCart={addToCart} />
      )}
    </div>
  );
};

export default ProductList;
