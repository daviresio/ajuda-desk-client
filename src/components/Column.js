import React from 'react';

const Column = ({children, marginBottom, className}) => {

    let c = 'column'
    if(marginBottom) c = c + ` margin-bottom-${marginBottom}`
    if(className) c = c + ` ${className}`

    return (
        <div className={c}>
            {children}
        </div>
    );
};

export default Column;