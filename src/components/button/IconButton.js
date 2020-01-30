import React from 'react';

const IconButton = ({icon, onClick, label}) => {
    return (
        <div className={'icon-button'} onClick={onClick} data-tooltip={label}>
            {icon}
        </div>
    );
};

export default IconButton;