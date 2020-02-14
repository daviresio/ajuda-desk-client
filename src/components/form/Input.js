import React from 'react';
import {generateId} from "../../util/util";

const Input = ({type = 'text', placeholder, rounded, className, label, detail, required, value, field, form, error, endButtons, onClickContainer, ...props}) => {

    let c = 'input'
    if(rounded) c = c + ' input-rounded'
    if(className) c = c + ` ${className}`

    const id = generateId()

    return (
        <div className={error ? 'input-container input-container-error' : 'input-container'} onClick={onClickContainer}>
            {label && <label htmlFor={id} className={required ? 'label-required' : null}>{label}</label>}
            <input id={id} className={c} type={type} placeholder={placeholder} {...field} {...props}/>
            {endButtons? <div className={'end-buttons'}>{endButtons}</div> : null}
            {detail && <span>{detail}</span>}
            {error && <span className={'error-detail'}>{error}</span>}
        </div>
    );
};

export default Input;