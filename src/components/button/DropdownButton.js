import React, {useState} from 'react';
import ClickOutside from "../ClickOutside";

const DropdownButton = ({label, onClick, type, color = 'transparent', className, marginRight, options = []}) => {

    const [isOpen, setOpen] = useState(false)

    if (marginRight) className = className + ` margin-right-${marginRight}`

    if(isOpen) className = className + ' dropdown-button-active'

    const handleClick = (i) => {
        setOpen(false)
        onClick(i)
    }

    return (
        <ClickOutside clickOutside={()=> setOpen(false)}>
            <div className={'dropdown-button-container select'}>
            <button type={type} onClick={() => setOpen(prev => !prev)} className={`button-color-${color} ${className}`}>
                <i className={'fas fa-plus'} /><span>{label}</span><i className={isOpen ? `fas fa-chevron-down icon-rotate` : `fas fa-chevron-down`} />
            </button>
            <ul className={isOpen ? 'select-lista' : 'select-lista hide-select'}>
                {options.map((v, i) =>
                    <li onClick={() => handleClick(i)} key={i}><span className={'select-label'}>{v}</span> </li>)}
            </ul>
            </div>
        </ClickOutside>
    );
};

export default DropdownButton;
