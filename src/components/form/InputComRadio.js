import React from 'react';

const InputComRadio = ({radio, input, className}) => {
    return (
        <div className={`input-com-radio-container ${className}`}>
            {radio}
            {input}
        </div>
    );
};

export default InputComRadio;