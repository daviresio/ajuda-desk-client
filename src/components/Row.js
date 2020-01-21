import React from 'react';

const Row = ({children, marginBottom, className, noSpace}) => {

    let c = 'row'
    if(marginBottom) c = c + ` margin-bottom-${marginBottom}`
    if(noSpace) c = c + ' row-no-space'
    if(className) c = c + ` ${className}`

    return (
        <div className={c}>
            {children}
        </div>
    );
};

export default Row;