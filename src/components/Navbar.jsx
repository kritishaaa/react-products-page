import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import CartCount from './CartCount';
import Sidebar from './SideBar';
import {  useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';

const Navbar = ({ cartCount, cartItems, removeFromCart, setShowToast, clearCart }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const logOut = () => {
    navigate('/login');
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container mx-auto hidden lg:block">
        <div className="flex justify-between items-center p-8">
          <h1 className="text-4xl font-medium">Products</h1>
          <div className="relative w-full max-w-[500px]">
            <input
              type="text"
              className="bg-gray-100 border-none outline-none px-6 py-3 rounded-[30px] w-full"
              placeholder="Search products..."
            />
            <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-600" size={20} />
          </div>
          <div className="flex items-center space-x-4">  {/* Flex container with spacing between items */}
      <div className="icon_wrapper relative">
        <FaShoppingCart className="cursor-pointer" size={25} onClick={toggleSidebar} />
        <CartCount size="w-[25px] h-[25px]" count={cartCount} />
      </div>
      <HiOutlineLogout className="icon-wrapper cursor-pointer" size={35} onClick={logOut} />
    </div>
        </div>
      </div>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={closeSidebar} 
        cartItems={cartItems} 
        removeFromCart={removeFromCart}
        setShowToast={setShowToast}
        clearCart={clearCart}
      />
    </div>
  );
};

export default Navbar;
