import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import PanelRight from "../../layout/PanelRight";
import Title from "../../components/Title";
import {Field, Formik} from "formik";
import Row from "../../components/Row";
import Column from "../../components/Column";
import Upload from "../../components/Upload";
import Linq from "../../components/Linq";
import Input from "../../components/form/Input";
import TextArea from "../../components/form/TextArea";
import SelectContainer from "../../components/form/SelectContainer";
import CreatableSelect from "react-select/creatable/dist/react-select.esm";
import Select from "react-select";
import * as Yup from "yup";
import {
    buscarEmpresa,
    dadosDefaultNovaEmpresa,
    editarEmpresa,
    salvarEmpresa
} from "../../store/actions/empresa-actions";
import {closePanelCadastroEmpresa} from "../../store/actions/panel-actions";
import {noneSelectValue, replaceNullValues} from "../../util/util";


const validadeSchema = Yup.object().shape({
    nome: Yup.string().required('O campo nome `e obrigatorio'),
    emails: Yup.array().of(Yup.object().shape({email: Yup.string().email('E-mail invalido')}))

})


const NovaEmpresaForm = ({scores, tipoPlanos, dataRenovacoes, tipoEmpresas, close, willUnmount, salvar, carregarDadosDefault, id, empresa, buscar, editar}) => {

    const [initialValues, setInitialValues] = useState(
        {
            foto: '',
            nome: '',
            descricao: '',
            anotacao: '',
            score_id: 0,
            tipo_plano_id: 0,
            tipo_empresa_id: 0,
            data_renovacao: null,
            dominios: [],
        }
    )

    useEffect(() => {
        carregarDadosDefault()
    }, [])

    useEffect(() => {
        if (id) buscar(id)
    }, [id])

    useEffect(() => {
        if (empresa) setInitialValues(empresa)
    }, [empresa])

    const emptyImage = require('../../assets/images/empty_image_empresa_logo.svg')

    let handleS = null

    const getScoreValue = v => {
        const index = scores.findIndex(x => x.value === v)
        if (index === -1) return null
        return scores[index]
    }

    const getTipoPlanosValue = v => {
        const index = tipoPlanos.findIndex(x => x.value === v)
        if (index === -1) return null
        return tipoPlanos[index]
    }

    const getTipoEmpresasValue = v => {
        const index = tipoEmpresas.findIndex(x => x.value === v)
        if (index === -1) return null
        return tipoEmpresas[index]
    }

    return (
        <PanelRight confirm={() => handleS()} willUnmount={willUnmount} close={close} className={'nova-empresa-overlay'}
                    header={
                        <div className={'nova-empresa-header'}>
                            <img src={require('../../assets/images/nova_empresa.svg')}/>
                            <Title>Nova empresa</Title>
                        </div>
                    }>
            <>
                <p>
                    Quando alguém entra em contato com você, essa pessoa é adicionada como um contato na sua conta. Você
                    pode criar empresas e associar contatos a elas.
                </p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validadeSchema}
                    enableReinitialize={true}
                    onSubmit={({anotacao, ...values}, {setSubmiting}) => {
                        // TODO implementar anotacoes

                        values.dominios = values.dominios !== null ? values.dominios.map(v => v.label) : []
                        delete values.score
                        delete values.tipo_empresa
                        delete values.tipo_plano

                        values.id ? editar(values) : salvar(values)
                    }}
                >
                    {({values, handleSubmit, setFieldValue, submitForm, errors, touched, ...props}) => {
                        handleS = submitForm

                        const hasFoto = values && values.foto && values.foto.toString().trim() !== ''

                        return <form onSubmit={handleSubmit}>

                            <Row noSpace className={'foto-container'} marginBottom={2}>
                                <div
                                    className={hasFoto ? 'inner-foto-container' : 'inner-foto-container inner-foto-container-empresa-empty'}>
                                    <img src={hasFoto ? values.foto : emptyImage}/>
                                </div>

                                <Column className={'foto-description'}>
                                    {hasFoto ? <Row noSpace>
                                            <Upload onComplete={v => setFieldValue('foto', v)}><Linq>Alterar logotipo</Linq></Upload>
                                            <span>&nbsp;&nbsp; - &nbsp;&nbsp;</span>
                                            <Linq onClick={() => setFieldValue('foto', '')}>Remover</Linq>
                                        </Row>
                                        : <Upload onComplete={v => setFieldValue('foto', v)}><Linq>Carregar
                                            logotipo</Linq></Upload>}
                                    <span>E aconselhavel que o logotipo da empresa tenha o mesmo comprimento e altura</span>
                                </Column>
                            </Row>

                            <Field component={Input} name={'nome'} label={'Nome da empresa'} required
                                   placeholder={'Insira o nome desta pessoa'}
                                   error={errors.nome && touched.nome ? errors.nome : null}
                            />


                            <Field component={TextArea} name={'descricao'} label={'Descricao'}
                                   placeholder={'Escreva algo que descreva esta empresa'}/>

                            <Field component={TextArea} name={'anotacao'} label={'Anotacoes'}
                                   placeholder={'Adicione anotacoes sobre esta empresa, como informacoes sobre negocios recentes, etc.'}/>

                            <SelectContainer marginTop={2} label={'Nomes de dominio desta empresa'}
                                             detail={'Os contatos com endereços de e-mail que contêm estes domínios serão associados a esta empresa'}>
                                <Field component={CreatableSelect} isMulti name={'dominios'} isClearable
                                       onChange={(v) => setFieldValue('dominios', v)}
                                       noOptionsMessage={() => 'Digite 1 ou 2 caracteres...'}
                                       formatCreateLabel={v => `Criar ${v}`} value={values.dominios}/>
                            </SelectContainer>

                            <SelectContainer marginTop={2} label={'Score'}>
                                <Field component={Select} options={scores} value={getScoreValue(values.score_id)}
                                       onChange={opt => setFieldValue('score_id', opt.value)}/>
                            </SelectContainer>

                            <SelectContainer marginTop={2} label={'Tipo do plano'}>
                                <Field component={Select} options={tipoPlanos}
                                       value={getTipoPlanosValue(values.tipo_plano_id)}
                                       onChange={opt => setFieldValue('tipo_plano_id', opt.value)}/>
                            </SelectContainer>

                            <SelectContainer marginTop={2} label={'Data renovacao'}>
                                <Field component={Select} options={dataRenovacoes}
                                       onChange={opt => setFieldValue('data_renovacao', opt)}/>
                            </SelectContainer>

                            <SelectContainer marginTop={2} label={'Tipo da empresa'}>
                                <Field component={Select} options={tipoEmpresas}
                                       value={getTipoEmpresasValue(values.tipo_empresa_id)}
                                       onChange={opt => setFieldValue('tipo_empresa_id', opt.value)}/>
                            </SelectContainer>

                        </form>
                    }}
                </Formik>

            </>
        </PanelRight>
    )
}


const mapStateToProps = ({apiData, panel}) => {
    const empresa = {...replaceNullValues(apiData.empresa, ['anotacoes', 'tarefas', 'dominios', 'contatos'], ['deleted_at', 'data_renovacao'])}
    if (empresa.dominios !== undefined) empresa.dominios = empresa.dominios.map(v => ({label: v, value: v}))

    const scores = apiData.scores.map(v => ({label: v.nome, value: v.id}))
    const tipoPlanos = apiData.tipoPlanos.map(v => ({label: v.nome, value: v.id}))
    const tipoEmpresas = apiData.tipoEmpresas.map(v => ({label: v.nome, value: v.id}))

    scores.unshift(noneSelectValue)
    tipoPlanos.unshift(noneSelectValue)
    tipoEmpresas.unshift(noneSelectValue)

    return {
        scores,
        tipoPlanos,
        tipoEmpresas,
        dataRenovacoes: apiData.dataRenovacoes,
        id: panel.cadastroEmpresa.id,
        empresa,
    }
}

const mapDispatchToProps = dispatch => ({
    close: () => dispatch(closePanelCadastroEmpresa()),
    salvar: (v) => dispatch(salvarEmpresa(v)),
    carregarDadosDefault: () => dispatch(dadosDefaultNovaEmpresa()),
    buscar: (v) => dispatch(buscarEmpresa(v)),
    editar: (v) => dispatch(editarEmpresa(v)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NovaEmpresaForm);



