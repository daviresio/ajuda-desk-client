import React from 'react';
import Input from "./Input";
import Linq from "../Linq";

const InputPesquisa = () => {
    return (
        <div className={'input-pesquisa'}>
            <i className="fas fa-search" />
            <Input placeholder={'Pesquisar endereco de e-mail'} />
            <Linq>Limpar</Linq>
        </div>
    );
};

export default InputPesquisa;