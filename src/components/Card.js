import React from 'react';

const Card = ({children, className}) => {
    return (
        <div className={className ? className.concat(' card') : 'card'}>
            {children}
        </div>
    );
};

export default Card;