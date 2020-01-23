import React from 'react';

const SelectContainer = ({label, children, id, marginTop}) => {

    let c = 'input-container'
    if(marginTop) c = c + ` margin-top-${marginTop}`

    return (
        <div className={c}>
            <label htmlFor={id}>{label}</label>
            {children}
        </div>
    );
};

export default SelectContainer;