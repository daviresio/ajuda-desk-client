import React from 'react';

const Input = ({type = 'text', placeholder, rounded}) => {

    let c = 'input'
    if(rounded) c = c + ' input-rounded'

    return (
        <div>
            <input className={c} type={type} placeholder={placeholder}/>
        </div>
    );
};

export default Input;