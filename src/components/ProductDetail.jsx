import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ProductDetail = ({ product, onClose, addToCart }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">

                <button
                    onClick={onClose}
                    className=" top-3 left-3 text-gray-500 hover:text-gray-700"
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
                <div className=" flex flex-col items-center">
                    <img className="w-48 h-48 object-cover mb-4" src={product.thumbnail} alt={product.title} />
                    <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-lg font-bold mb-4">${product.price}</p>
                    <button onClick={() => addToCart(product)}
                        className=" text-blue-500 py-2 px-4 rounded hover:text-blue-300"
                    >
                        <FaShoppingCart size={25} />
                    </button>
                   
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
