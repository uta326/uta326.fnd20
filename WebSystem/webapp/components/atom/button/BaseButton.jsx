import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}
    className="bg-pink-200 text-gray-800 rounded-full px-4 py-2 hover:bg-pink-300"
    >
      {label}
    </button>
  );
}

export default Button;