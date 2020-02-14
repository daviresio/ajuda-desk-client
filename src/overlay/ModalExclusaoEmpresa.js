import React from 'react';
import DelayUnmount from "../components/DelayUnmount";
import {connect} from "react-redux";
import ModalTop from "../layout/ModalTop";
import Subtitle from "../components/Subtitle";
import {closeModalExcluirEmpresa} from "../store/actions/panel-actions";
import {excluirEmpresa} from "../store/actions/empresa-actions";

const ModalExclusaoEmpresa = ({id, closeModal, excluir}) =>
    <DelayUnmount mount={!!id}>
        <ModalTop header={<Subtitle>Excluir empresa</Subtitle>} close={closeModal} confirm={() => excluir(id)}>
            <span>
                Tem certeza de que deseja excluir permanentemente esta empresa? Excluir uma empresa não excluirá seus respectivos contatos.
            </span>
        </ModalTop>
    </DelayUnmount>

const mapStateToProps = ({panel}) => ({
    id: panel.excluirEmpresa
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModalExcluirEmpresa()),
    excluir: (id) => dispatch(excluirEmpresa(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalExclusaoEmpresa);