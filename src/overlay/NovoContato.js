import React from 'react';
import ReactDOM from 'react-dom'
import PanelRight from "../layout/PanelRight";


const NovoContatoComponent = () => {
    return (
        <PanelRight>

        </PanelRight>
    )
}

const NovoContato = () => {
    return ReactDOM.createPortal(<NovoContatoComponent/>, document.body)
};

export default NovoContato;