import React from 'react';
import Button from "../components/Button";

const PanelRight = ({children, close}) => {
    return (
        <div className={'panel-right'}>
            <div className={'panel-body'}>
                <div className={'close-panel'} onClick={close}>
                    <i className="fas fa-times" />
                </div>
                <div className={'panel-header'}>

                </div>
                <div className={'panel-content'}>{children}</div>
                <div className={'panel-footer'}>
                    <Button label={'Cancelar'} onClick={close} marginRight={2} />
                    <Button label={'Criar'} color={'dark'} />
                </div>
            </div>
        </div>
    );
};

export default PanelRight;