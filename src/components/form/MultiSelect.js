import React, {useState} from 'react';
import ClickOutside from "../ClickOutside";
import Input from "./Input";

const MultiSelect = ({options = []}) => {
    const [open, setOpen] = useState(false)

    const [selected, setSelected] = useState([])


    const getValueSelected = () => {
        const v = options.filter(v => v.value === selected)
        if (!v.length) return null
        return v[0].label
    }

    const isSelected = v => selected.findIndex(x => x === v.value) !== -1

    const changeSelect = v => {
        const index = selected.findIndex(x => x === v.value)
        if(index !== -1) {
            setSelected(prev => prev.filter(x => x !== v.value))
            return
        }
        setSelected(prev => [...prev, v.value])
    }
//                <span className={'select-label'}>{getValueSelected() === null ? 'Selecione' : getValueSelected()}</span>

    return (
        <ClickOutside clickOutside={() => {setOpen(false)}}>
            <div className={'select'} onClick={() => setOpen(prev => !prev)}>
                <div className={'multiselect-input-container'}>
                    <Input rounded placeholder={'Selecione'} />
                    <i className={open ? `fas fa-chevron-down icon-rotate` : `fas fa-chevron-down`}/>
                    <div className={'multiselect-value-container'}>
                        {selected.map((v, i) => MultiSelectValue(options.filter(x => x.value === v)[0], i))}
                    </div>
                <ul className={open ? 'select-lista' : 'select-lista hide-select'}>
                    {options.map(v =>
                        <li className={isSelected(v) ? 'select-option-active' : ''} onClick={() => changeSelect(v)} key={v.value}>
                            <span className={'select-label'}>{v.label}</span> {isSelected(v) ? <i className={'fas fa-check'}/> : null}</li>)}
                </ul>
                </div>
            </div>
        </ClickOutside>
    );
};

export default MultiSelect;


const MultiSelectValue = (v, i) => {
        console.log(v)
    return <div key={i} className={'multiselect-value'}>
        <span>{v.label}</span>
        <div className={'icon-multiselect-container'}>
            <i className={`fas fa-chevron-close`}/>
        </div>
    </div>

}