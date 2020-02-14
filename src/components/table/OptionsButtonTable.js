import React, {useState} from 'react';
import ClickOutside from "../ClickOutside";

const OptionsButtonTable = ({options = []}) => {

    const [isOpen, setOpen] = useState(false)

    let c = ''

    if (isOpen) c = 'options-button-table-active'

    const handleClick = (action) => {
        setOpen(false)
        action()
    }

    return (
        <td className={'options-button-table'}>
            <ClickOutside clickOutside={() => setOpen(false)}>
                <div className={'select'}>
                    <div className={`options-button-table-container ${c}`} onClick={() => setOpen(prev => !prev)}>
                        <i className="fas fa-ellipsis-v"/>
                    </div>
                    <ul className={isOpen ? 'select-lista' : 'select-lista hide-select'}>
                        {options.map((v, i) =>
                            <li onClick={() => handleClick(v.action)} key={i}><span
                                className={'select-label'}>{v.label}</span></li>)}
                    </ul>
                </div>
            </ClickOutside>
        </td>
    );
};

export default OptionsButtonTable;
