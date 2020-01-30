import React from 'react';

const Row = ({children, marginBottom, marginTop, className, noSpace, alignRight}) => {

    let c = 'row'
    if(marginBottom) c = c + ` margin-bottom-${marginBottom}`
    if(marginTop) c = c + ` margin-top-${marginTop}`
    if(noSpace) c = c + ' row-no-space'
    if(className) c = c + ` ${className}`
    if(alignRight) c = c + ` row-align-right`

    return (
        <div className={c}>
            {children}
        </div>
    );
};

export default Row;