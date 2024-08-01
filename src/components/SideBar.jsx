import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import CheckoutModal from './CheckoutModal';

const Sidebar = ({ isOpen, onClose, cartItems, removeFromCart, setShowToast, clearCart }) => {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = () => {
        setIsCheckoutOpen(true);
    };

    const closeCheckout = () => {
        setIsCheckoutOpen(false);
    };

    return (
        <>
            <div
                className={`fixed inset-y-0 right-0 bg-gray-800 bg-opacity-75 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
            >
                <div className="relative bg-white w-96 h-full p-4">
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <h2 className="text-2xl font-bold mb-4">Cart</h2>
                    <ul className="mb-4">
                        {cartItems.length === 0 ? (
                            <li className="text-gray-700">No items in cart</li>
                        ) : (
                            cartItems.map((item, index) => (
                                <li key={index} className="border-b py-2 flex justify-between items-center">
                                    <div className="flex-grow">
                                        <div className="flex justify-between">
                                            <span>{item.title}</span>
                                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Quantity: {item.quantity}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <MdDelete size={24} />
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                    <div className="flex justify-between items-center pt-4">
                        <span className="font-bold">Total:</span>
                        <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={handleCheckout}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
                    >
                        Checkout
                    </button>
                </div>
            </div>
            {isCheckoutOpen && (
                <CheckoutModal
                    totalPrice={totalPrice}
                    onClose={closeCheckout}
                    setShowToast={setShowToast}
                    closeSidebar={onClose}
                    clearCart={clearCart}
                    cartItems={cartItems}
                />
            )}
        </>
    );
};

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeFromCart: PropTypes.func.isRequired,
    setShowToast: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired
};

export default Sidebar;
