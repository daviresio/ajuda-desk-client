import React from 'react';
import {generateId} from "../../util/util";

const Input = ({type = 'text', placeholder, rounded, className, label, detail, required}) => {

    let c = 'input'
    if(rounded) c = c + ' input-rounded'
    if(className) c = c + ` ${className}`

    const id = generateId()

    return (
        <div className={'input-container'}>
            {label && <label htmlFor={id} className={required ? 'label-required' : null}>{label}</label>}
            <input id={id} className={c} type={type} placeholder={placeholder}/>
            {detail && <span>{detail}</span>}
        </div>
    );
};

export default Input;