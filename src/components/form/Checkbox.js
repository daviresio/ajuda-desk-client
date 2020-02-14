import React, {useRef, useState} from 'react';
import {generateId} from "../../util/util";

const Checkbox = ({label, field, form, ...props}) => {

    const id = generateId()

    const [isChecked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(prev => !prev)
    }

    return (
        <div className={'checkbox-container'} data-tooltip={label}>
            <input type={'checkbox'} id={id} {...field} {...props} onChange={handleChange} value={isChecked} />
            <label htmlFor={id}/>
            {isChecked && <i className="fas fa-check" />}
        </div>
    );

}

export default Checkbox;