import React from 'react';
import NovoContato from "./novo-contato/NovoContato";
import NovaEmpresa from "./cadastro-empresa/NovaEmpresa";
import ModalExclusaoEmpresa from "./ModalExclusaoEmpresa";

const Overlays = () => {
    return (
        <>
            <NovoContato/>
            <NovaEmpresa/>
            <ModalExclusaoEmpresa/>
        </>
    );
};

export default Overlays;