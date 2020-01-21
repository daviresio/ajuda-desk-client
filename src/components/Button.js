import React from 'react';

const Button = ({label, onClick, type, color = 'transparent', className}) => {
    return (
        <button type={type} onClick={onClick} className={`button-color-${color} ${className}`}>
            {label}
        </button>
    );
};

export default Button;