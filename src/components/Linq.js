import React from 'react';

const Linq = ({children, onClick, block, noDecoration, className}) => {

    let c = 'link'
    if(block) c = c + ' link-block'
    if(noDecoration) c = c + ' link-no-decoration'
    if(className) c = c + ` ${className}`

    const handleClick = () => {
        if(!block) onClick()
    }

    return (
        <span className={c} onClick={handleClick}>
            {children}
        </span>
    );
};

export default Linq;