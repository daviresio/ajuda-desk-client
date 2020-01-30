import React from 'react';

const EndButtonInput = ({children, buttons, style}) => {
    return (
        <div className={'end-buttons-container-input'}>
            {children}
            <div className={'end-buttons'} style={style}>{buttons}</div>
        </div>
    );
};

export default EndButtonInput;