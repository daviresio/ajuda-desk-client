import React from 'react';
import {generateId} from "../../util/util";

const RadioTooltip = ({label, field, form, ...props}) => {

    const id = generateId()

    return (
        <div className={'radio-container'} data-tooltip={label}>
            <input type={'radio'} id={id} {...field} {...props} checked={field.value === true}/>
            <label htmlFor={id}/>
        </div>
    );
};

export default RadioTooltip;