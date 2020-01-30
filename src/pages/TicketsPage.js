import React, {useEffect} from 'react';
import Subtitle from "../components/Subtitle";
import Ticket from "../components/ticket/Ticket";
import Select from "react-select";
import {connect} from "react-redux";
import {listGrupos} from "../store/sagas/api-data-saga";
import {Field, Formik} from "formik";
import SelectContainer from "../components/form/SelectContainer";
import {exibirPanelNovaEmpresa, exibirPanelNovoContato} from "../store/sagas/panel-saga";
import Button from "../components/button/Button";

const TicketsPage = ({loadData, novoContato}) => {

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div className={'tickets-page'}>
            <div className={'content-ticket-page'}>
            <Ticket/>
            <Ticket/>
            <Ticket/>
            <Ticket/>
            <Button onClick={novoContato} label={'Teste'} color={'dark'} />
            </div>
            <div className={'filters'}>
                <Subtitle>Filtros</Subtitle>

                <Formik
                    initialValues={{
                        agentes: [],
                        grupos: [],
                        dataCriacao: null,
                        resolucaoAte: [],
                        primeiraRespostaAte: [],
                        status: [],
                        prioridade: [],
                        tipo: [],
                        origem: [],
                        tags: [],
                        empresas: [],
                        inicioCompromisso: [],
                        fimCompromisso: [],
                    }}

                    onSubmit={(values, {setSubmiting}) => {
                        console.log(values)
                    }}
                >
                    {({values, handleSubmit, isSubmitting, handleChange, setFieldValue}) => (
                        <form onSubmit={handleSubmit}>
                            <SelectContainer marginTop={2} label={'Agentes'}>
                                <Field component={Select} isMulti options={options} onChange={opt => setFieldValue('agentes', opt)}/>
                            </SelectContainer>
                            <SelectContainer marginTop={2} label={'Grupos'}>
                                <Field component={Select} isMulti options={options} onChange={opt => setFieldValue('grupos', opt)}/>
                            </SelectContainer>
                            <SelectContainer marginTop={2} label={'Data Criacao'}>
                                <Field component={Select} options={options} onChange={opt => setFieldValue('dataCriacao', opt)}/>
                            </SelectContainer>
                            <SelectContainer marginTop={2} label={'Resolucao ate'}>
                                <Field component={Select} isMulti options={options} onChange={opt => setFieldValue('resolucaoAte', opt)}/>
                            </SelectContainer>
                            <SelectContainer marginTop={2} label={'Primeira resposta ate'}>
                                <Field component={Select} isMulti options={options} onChange={opt => setFieldValue('primeiraRespostaAte', opt)}/>
                            </SelectContainer>
                            <SelectContainer marginTop={2} label={'Status'}>
                                <Field component={Select} isMulti options={options} onChange={opt => setFieldValue('status', opt)}/>
                            </SelectContainer>
                            <SelectContainer marginTop={2} label={'Prioridade'}>
                                <Field component={Select} isMulti options={options} onChange={opt => setFieldValue('prioridade', opt)}/>
                            </SelectContainer>
                            <SelectContainer marginTop={2} label={'Tipo'}>
                                <Field component={Select} isMulti options={options} onChange={opt => setFieldValue('tipo', opt)}/>
                            </SelectContainer>
                            <SelectContainer marginTop={2} label={'Origem'}>
                                <Field component={Select} isMulti options={options} onChange={opt => setFieldValue('origem', opt)}/>
                            </SelectContainer>
                            <SelectContainer marginTop={2} label={'Tags'}>
                                <Field component={Select} isMulti options={options} onChange={opt => setFieldValue('tags', opt)}/>
                            </SelectContainer>
                            <SelectContainer marginTop={2} label={'Empresas'}>
                                <Field component={Select} isMulti options={options} onChange={opt => setFieldValue('empresas', opt)}/>
                            </SelectContainer>
                            <SelectContainer marginTop={2} label={'Inicio do compromisso'}>
                                <Field component={Select} options={options} onChange={opt => setFieldValue('inicioCompromisso', opt)}/>
                            </SelectContainer>
                            <SelectContainer marginTop={2} label={'Fim do compromisso'}>
                                <Field component={Select} options={options} onChange={opt => setFieldValue('fimCompromisso', opt)}/>
                            </SelectContainer>


                            <input type={'submit'}/>

                         </form>
                        )}
                </Formik>

            </div>
        </div>
    );
};

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    loadData: () => dispatch(listGrupos()),
    novoContato: () => dispatch(exibirPanelNovoContato()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketsPage);



const options = [
    {
        label: "Option 1",
        value: "option-1"
    },
    {
        label: "Option 2",
        value: "option-2"
    },
    {
        label: "Option 3",
        value: "option-3"
    }
];