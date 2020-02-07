import React from 'react';

const Row = ({children, marginBottom, marginTop, className, noSpace, alignRight, onClick}) => {

    let c = 'row'
    if(marginBottom) c = c + ` margin-bottom-${marginBottom}`
    if(marginTop) c = c + ` margin-top-${marginTop}`
    if(noSpace) c = c + ' row-no-space'
    if(className) c = c + ` ${className}`
    if(alignRight) c = c + ` row-align-right`

    return (
        <div className={c} onClick={onClick}>
            {children}
        </div>
    );
};

export default Row;