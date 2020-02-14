import React from 'react';
import ReactDOM from "react-dom";
import Button from "../components/button/Button";
import Row from "../components/Row";

const ModalTop = ({header, children, close, confirm, className, willUnmount}) => {

    let c = `modal modal-top ${className}`
    if(!willUnmount) c = c + ' modal-top-enter-animation'
    if(willUnmount) c = c + ' modal-top-leave-animation'

    return (
        ReactDOM.createPortal(<div className={c} onClick={close}>
            <div className={'modal-content '} onClick={e => e.stopPropagation()}>
                <Row className={'modal-header'}>
                    {header}
                    <i className="fas fa-times" onClick={close} />
                </Row>
                <div className={'modal-body'}>{children}</div>
                <div className={'modal-footer'}>
                    <Button label={'Cancelar'} onClick={close} marginRight={2} />
                    <Button label={'Excluir'} color={'red'} onClick={confirm} />
                </div>
            </div>
        </div>, document.body)
    );
};

export default ModalTop;