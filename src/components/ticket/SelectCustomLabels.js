import React, {useState} from 'react';
import ClickOutside from "../ClickOutside";

const SelectCustomLabels = ({options = []}) => {
    const [open, setOpen] = useState(false)

    const [selected, setSelected] = useState(1)


    const getValueSelected = () => {
        const v = options.filter(v => v.value === selected)
        if (!v.length) return null
        return v[0].label
    }

    const changeSelect = v => {
        setSelected(v.value)
    }

    return (
        <ClickOutside clickOutside={() => {setOpen(false)}}>
            <div className={'select'} onClick={() => setOpen(prev => !prev)}>
                <i className="fas fa-wave-square ticket-status-icon" />
                <span className={'select-label'}>{getValueSelected() === null ? 'Selecione' : getValueSelected()}</span>
                <i className={open ? `fas fa-chevron-down icon-rotate` : `fas fa-chevron-down`}/>
                <ul className={open ? 'select-lista' : 'select-lista hide-select'}>
                    {options.map(v =>
                        <li className={v.value === selected ? 'select-option-active' : ''} onClick={() => changeSelect(v)} key={v.value}>
                            <span className={'select-label'}>{v.label}</span> {v.value === selected ? <i className={'fas fa-check'}/> : null}</li>)}
                </ul>
            </div>
        </ClickOutside>
    );
};

export default SelectCustomLabels;