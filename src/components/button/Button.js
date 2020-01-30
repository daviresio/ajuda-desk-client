import React from 'react';

const Button = ({label, onClick, type, color = 'transparent', className, marginRight}) => {

    if(marginRight) className = className + ` margin-right-${marginRight}`

    return (
        <button type={type} onClick={onClick} className={`button-color-${color} ${className}`}>
            {label}
        </button>
    );
};

export default Button;