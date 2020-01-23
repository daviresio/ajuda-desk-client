import React from 'react';

const Label = ({children, id}) => {
    return (
        <label htmlFor={id}>{children}</label>
    );
};

export default Label;