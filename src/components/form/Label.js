import React from 'react';

const Label = ({children, id, className, marginBottom}) => {

    let c = 'label'
    if(className) c = c + ` ${className}`
    if(marginBottom) c = c + ` margin-bottom-${marginBottom}`

    return (
        <label htmlFor={id} className={c}>{children}</label>
    );
};

export default Label;