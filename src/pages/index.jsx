import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import Toast from '../components/Toast';

const Index = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += 1;
        return newItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setCartCount(prevCount => prevCount + 1);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(item => item.id === itemToRemove.id);
      if (itemIndex > -1) {
        const newItems = [...prevItems];
        if (newItems[itemIndex].quantity > 1) {
          newItems[itemIndex].quantity -= 1;
        } else {
          newItems.splice(itemIndex, 1);
        }
        return newItems;
      }
      return prevItems;
    });
    setCartCount(prevCount => prevCount - 1);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div>
      <Navbar
        cartCount={cartCount}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        setShowToast={setShowToast}
        onCartClick={() => setIsSidebarOpen(!isSidebarOpen)}
        clearCart={clearCart}
      />
      <ProductList addToCart={addToCart} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        setShowToast={setShowToast}
        clearCart={clearCart}
      />
      {showToast && <Toast message="Purchase confirmed!" onClose={handleCloseToast} />}
    </div>
  );
};

export default Index;
