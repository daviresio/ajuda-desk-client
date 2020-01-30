import React from 'react';
import {connect} from "react-redux";
import DelayUnmount from "../../components/DelayUnmount";
import NovaEmpresaForm from "./NovaEmpresaForm";





const NovaEmpresa = ({visible, close, salvar}) => <DelayUnmount mount={visible}><NovaEmpresaForm
    close={close} salvar={salvar}/></DelayUnmount>

const mapStateToProps = ({panel}) => ({
    visible: panel.novaEmpresa,
})

export default connect(mapStateToProps)(NovaEmpresa);