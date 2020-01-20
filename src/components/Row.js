import React from 'react';

const Row = ({children, marginBottom, className}) => {

    let c = 'row'
    if(marginBottom) c = c + ` margin-bottom-${marginBottom}`
    if(className) c = c + ` ${className}`

    return (
        <div className={c}>
            {children}
        </div>
    );
};

export default Row;