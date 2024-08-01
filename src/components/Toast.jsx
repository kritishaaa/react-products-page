// Toast.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Toast = ({ message, onClose }) => {
    return (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg flex items-center">
            <span>{message}</span>
            <button
                onClick={onClose}
                className="ml-4 text-white hover:text-gray-300"
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
        </div>
    );
};

Toast.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Toast;
