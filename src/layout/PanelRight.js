import React from 'react';
import Button from "../components/button/Button";
import ReactDOM from "react-dom";

const PanelRight = ({header, children, close, confirm, className, willUnmount}) => {

    let c = `panel-right ${className}`
    if(!willUnmount) c = c + ' panel-right-enter-animation'
    if(willUnmount) c = c + ' panel-right-leave-animation'

    return (
        ReactDOM.createPortal(<div className={c} onClick={close}>
            <div className={'panel-body'} onClick={e => e.stopPropagation()}>
                <div className={'close-panel'} onClick={close}>
                    <i className="fas fa-times" />
                </div>
                <div className={'panel-header'}>
                    {header}
                </div>
                <div className={'panel-content'}>{children}</div>
                <div className={'panel-footer'}>
                    <Button label={'Cancelar'} onClick={close} marginRight={2} />
                    <Button label={'Criar'} color={'dark'} onClick={confirm} />
                </div>
            </div>
        </div>, document.body)
    );
};

export default PanelRight;