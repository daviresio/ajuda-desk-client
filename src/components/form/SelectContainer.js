import React from 'react';

const SelectContainer = ({label, children, id, marginTop, detail, error}) => {

    let c = 'input-container'
    if(marginTop) c = c + ` margin-top-${marginTop}`

    return (
        <div className={c}>
            <label htmlFor={id}>{label}</label>
            {children}
            {detail && <span>{detail}</span>}
            {error && <span className={'error-detail'}>{error}</span>}
        </div>
    );
};

export default SelectContainer;
