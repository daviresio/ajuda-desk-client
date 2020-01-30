import React from 'react';
import {generateId} from "../../util/util";

const TextArea = ({placeholder, rounded, className, label, detail, required, value, field, form, error, rows = 5, ...props}) => {

    let c = 'input'
    if(rounded) c = c + ' input-rounded'
    if(className) c = c + ` ${className}`

    const id = generateId()

    return (
        <div className={error ? 'input-container input-container-error' : 'input-container'}>
            {label && <label htmlFor={id} className={required ? 'label-required' : null}>{label}</label>}
            <textarea id={id} rows={rows} className={c} placeholder={placeholder} {...field} {...props}/>
            {detail && <span>{detail}</span>}
            {error && <span className={'error-detail'}>{error}</span>}
        </div>
    );
};

export default TextArea;