import React, {useState} from 'react';
import ClickOutside from "../ClickOutside";

const TicketPrioridade = () => {

    const [open, setOpen] = useState(false)

    const [selected, setSelected] = useState(2)

    const options = [
        {label: 'Baixa', cor: 'green', value: 1},
        {label: 'Media', cor: 'blue', value: 2},
        {label: 'Alta', cor: 'yellow', value: 3},
        {label: 'Urgente', cor: 'red', value: 4},
    ]

    const renderPrioridade = (label, cor) =>
        <>
            <div className={`prioridade-cor prioridade-cor-${cor}`} />
            <span className={'select-label'}>{label}</span>
        </>

    const getValuesSelected = () => {
        const v = options.filter(v => v.value === selected)
        if (!v) return [options[1].label, options[1].cor]
        return [v[0].label, v[0].cor]
    }

    const changeSelect = v => {
        setSelected(v.value)

    }

    return (
        <ClickOutside clickOutside={() => {setOpen(false)}}>
            <div className={'select ticket-prioridade'} onClick={() => setOpen(prev => !prev)}>
                {renderPrioridade(...getValuesSelected())}
                <i className={open ? `fas fa-chevron-down icon-rotate` : `fas fa-chevron-down`}/>
                <ul className={open ? 'select-lista' : 'select-lista hide-select'}>
                    {options.map(v =>
                        <li className={v.value === selected ? 'select-option-active' : ''} onClick={() => changeSelect(v)}
                            key={v.value}>{renderPrioridade(v.label, v.cor)} {v.value === selected ?
                            <i className={'fas fa-check'}/> : null}</li>)}
                </ul>
            </div>
        </ClickOutside>
    );
};

export default TicketPrioridade;