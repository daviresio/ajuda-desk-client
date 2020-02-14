import React, {useEffect, useState} from 'react';
import Table from "../../components/table/Table";
import {connect} from "react-redux";
import {editarEmpresa, listarEmpresas} from "../../store/actions/empresa-actions";
import OptionsButtonTable from "../../components/table/OptionsButtonTable";
import PageDividedSecondContentScrollable from "../../layout/PageDividedSecondContentScrollable";
import {openModalExcluirEmpresa, openPanelCadastroEmpresa} from "../../store/actions/panel-actions";
import Checkbox from "../../components/form/Checkbox";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const EmpresasPage = ({empresas, listData, excluir, history, editar}) => {

    const [valuesSelected, setValuesSelected] = useState([])

    useEffect(() => {
        listData()
    }, [])

    const emptyImage = require('../../assets/images/empty_image_empresa_logo.svg')

    return (
        <PageDividedSecondContentScrollable className={'empresas-page'}
                                            first={
                                                <Table
                                                    header={
                                                        <tr>
                                                            <th>Empresa</th>
                                                            <th>Contatos</th>
                                                            <th />
                                                        </tr>
                                                    }
                                                    rows={
                                                        empresas.map(v =>
                                                            <tr key={v.id}>
                                                                <td className={'descricao-empresa'}>
                                                                    <Checkbox/>
                                                                    <div className={'descricao-empresa-content'} onClick={() => history.push(`/empresas/${v.id}`)}>
                                                                    <div className={v.foto ? 'inner-foto-container' : 'inner-foto-container inner-foto-container-empresa-empty'}>
                                                                        <img src={v.foto ? v.foto : emptyImage} alt={'empresa logo'}/>
                                                                    </div>
                                                                    <span>{v.nome}</span>
                                                                    </div>
                                                                </td>
                                                                <td>{v.contatos}</td>
                                                                <OptionsButtonTable options={[
                                                                    {label: 'Editar', action: ()=> editar(v.id)},
                                                                    {label: 'Excluir', action: ()=> excluir(v.id)},
                                                                ]}/>
                                                            </tr>
                                                        )
                                                    }
                                                />
                                            }

                                            second={
                                            <div></div>
                                            }

                                            />

    );
};

const mapStateToProps = ({apiData}) => ({
    empresas: apiData.empresas.map(v => ({...v, contatos: v.contatos && Array.isArray(v.contatos) ? v.contatos.length : 0})),
})

const mapDispatchToProps = dispatch => ({
    listData: ()=> dispatch(listarEmpresas()),
    excluir: (v)=> dispatch(openModalExcluirEmpresa(v)),
    editar: (v)=> dispatch(openPanelCadastroEmpresa(v)),
})

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(EmpresasPage);