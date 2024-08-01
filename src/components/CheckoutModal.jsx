import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CheckoutModal = ({ totalPrice, onClose, setShowToast, closeSidebar, clearCart, cartItems }) => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowToast(true);
        clearCart();
        closeSidebar();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
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
                <h2 className="text-2xl font-bold mb-4">Checkout</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={userDetails.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={userDetails.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold mb-2">Products</h3>
                        <ul className="border rounded-lg p-4 max-h-48 overflow-y-auto">
                            {cartItems.map((item, index) => (
                                <li key={index} className="flex justify-between mb-2">
                                    <span>{item.title}</span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-between items-center border-t pt-4">
                        <span className="font-bold">Total:</span>
                        <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
                    >
                        Confirm Purchase
                    </button>
                </form>
            </div>
        </div>
    );
};

CheckoutModal.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    setShowToast: PropTypes.func.isRequired,
    closeSidebar: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    cartItems: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CheckoutModal;
