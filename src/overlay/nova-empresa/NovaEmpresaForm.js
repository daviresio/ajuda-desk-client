import React, {useEffect} from 'react';
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
import {dadosDefaultNovaEmpresa, salvarEmpresa} from "../../store/actions/empresa-actions";
import {esconderPanelNovaEmpresa} from "../../store/actions/panel-actions";


const validadeSchema = Yup.object().shape({
    nome: Yup.string().required('O campo nome `e obrigatorio'),
    emails: Yup.array().of(Yup.object().shape({email: Yup.string().email('E-mail invalido')}))

})


const NovaEmpresaForm = ({scores, tipoPlanos, dataRenovacoes, tipoEmpresas, close, willUnmount, salvar, carregarDadosDefault}) => {


    useEffect(() => {
        carregarDadosDefault()
    }, [])

        const emptyImage = require('../../assets/images/empty_image_empresa_logo.svg')

        let handleS = null

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
                        initialValues={{
                            foto: '',
                            nome: '',
                            descricao: '',
                            anotacao: '',
                            score: 0,
                            tipo_plano: 0,
                            data_renovacao: null,
                            tipo_empresa: 0,
                            dominios: [

                            ],
                        }}
                        validationSchema={validadeSchema}
                        onSubmit={(values, {setSubmiting}) => {
                            salvar(values)
                        }}
                    >
                        {({values, handleSubmit, setFieldValue, submitForm, errors, touched, ...props}) => {
                            handleS = submitForm

                            const hasFoto = values && values.foto && values.foto.toString().trim() !== ''

                            return <form onSubmit={handleSubmit}>

                                <Row noSpace className={'foto-container'} marginBottom={2}>
                                    <div className={hasFoto ? 'inner-foto-container' : 'inner-foto-container inner-foto-container-empresa-empty'}>
                                        <img src={hasFoto ? values.foto : emptyImage}/>
                                    </div>

                                    <Column className={'foto-description'}>
                                        {hasFoto ? <Row noSpace>
                                                <Upload onComplete={v => setFieldValue('foto', v)}><Linq>Alterar logotipo</Linq></Upload>
                                                <span>&nbsp;&nbsp; - &nbsp;&nbsp;</span>
                                                <Linq onClick={() => setFieldValue('foto', '')}>Remover</Linq>
                                            </Row>
                                            : <Upload onComplete={v => setFieldValue('foto', v)}><Linq>Carregar logotipo</Linq></Upload>}
                                        <span>E aconselhavel que o logotipo da empresa tenha o mesmo comprimento e altura</span>
                                    </Column>
                                </Row>

                                <Field component={Input} name={'nome'} label={'Nome da empresa'} required placeholder={'Insira o nome desta pessoa'}
                                       error={errors.nome && touched.nome ? errors.nome : null}
                                />


                                <Field component={TextArea} name={'descricao'} label={'Descricao'} placeholder={'Escreva algo que descreva esta empresa'}/>

                                <Field component={TextArea} name={'anotacao'} label={'Anotacoes'} placeholder={'Adicione anotacoes sobre esta empresa, como informacoes sobre negocios recentes, etc.'}/>

                                <SelectContainer marginTop={2} label={'Nomes de dominio desta empresa'} detail={'Os contatos com endereços de e-mail que contêm estes domínios serão associados a esta empresa'}>
                                    <Field component={CreatableSelect} isMulti name={'dominios'} isClearable onChange={(v) => setFieldValue('dominios', v.map(x => x.label))}
                                           noOptionsMessage={()=> 'Digite 1 ou 2 caracteres...'} formatCreateLabel={v => `Criar ${v}`} />
                                </SelectContainer>

                                <SelectContainer marginTop={2} label={'Score'}>
                                    <Field component={Select} options={scores} onChange={opt => setFieldValue('score', opt.value)}/>
                                </SelectContainer>

                                <SelectContainer marginTop={2} label={'Tipo do plano'}>
                                    <Field component={Select} options={tipoPlanos} onChange={opt => setFieldValue('tipo_plano', opt)}/>
                                </SelectContainer>

                                <SelectContainer marginTop={2} label={'Data renovacao'}>
                                    <Field component={Select} options={dataRenovacoes} onChange={opt => setFieldValue('data_renovacao', opt)}/>
                                </SelectContainer>

                                <SelectContainer marginTop={2} label={'Tipo da empresa'}>
                                    <Field component={Select} options={tipoEmpresas} onChange={opt => setFieldValue('tipo_empresa', opt)}/>
                                </SelectContainer>

                            </form>
                        }}
                    </Formik>

                </>
            </PanelRight>
        )
    }


const mapStateToProps = ({apiData}) => ({
    scores: apiData.scores.map(v => ({label: v.nome, value: v.id})),
    tipoPlanos: apiData.tipoPlanos,
    dataRenovacoes: apiData.dataRenovacoes,
    tipoEmpresas: apiData.tipoEmpresas,
})

const mapDispatchToProps = dispatch => ({
    close: () => dispatch(esconderPanelNovaEmpresa()),
    salvar: (v) => dispatch(salvarEmpresa(v)),
    carregarDadosDefault: () => dispatch(dadosDefaultNovaEmpresa())
})

export default connect(mapStateToProps, mapDispatchToProps)(NovaEmpresaForm);
