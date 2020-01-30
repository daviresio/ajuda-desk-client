import React from 'react';
import PanelRight from "../../layout/PanelRight";
import Title from "../../components/Title";
import {Field, FieldArray, Formik} from "formik";
import Row from "../../components/Row";
import Column from "../../components/Column";
import Upload from "../../components/Upload";
import Linq from "../../components/Linq";
import Input from "../../components/form/Input";
import Subtitle from "../../components/Subtitle";
import Label from "../../components/form/Label";
import InputComRadio from "../../components/form/InputComRadio";
import RadioTooltip from "../../components/form/RadioTooltip";
import IconButton from "../../components/button/IconButton";
import EndButtonInput from "../../components/button/EndButtonInput";
import CreatableSelect from "react-select/creatable/dist/react-select.esm";
import * as Yup from "yup";
import {esconderPanelNovoContato} from "../../store/sagas/panel-saga";
import {salvarContato} from "../../store/actions/api-data/contatos-saga";
import {connect} from "react-redux";
import {pesquisarEmpresas} from "../../store/actions/api-data/empresa-saga";

const validadeSchema = Yup.object().shape({
    nome: Yup.string().required('O campo nome `e obrigatorio'),
    emails: Yup.array().of(Yup.object().shape({email: Yup.string().email('E-mail invalido')}))
})

const AdicionarFormItem = ({label, block, onClick}) => {
    return <Linq block={block} onClick={onClick} noDecoration className={'adicionar-item'}>{label}</Linq>
}

const NovoContatoForm = ({close, willUnmount, salvar, empresas, pesquisarEmpresas}) => {

    const emptyImage = require('../../assets/images/empty_image.png')

    let handleS = null


    const handleChangeEmpresa = (newValue, actionMeta) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    const handleInputEmpresaChange = (v, actionMeta) => {
        console.group('Input Changed');
        console.log(v);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        pesquisarEmpresas(v)
    };

    return (
        <PanelRight confirm={() => handleS()} willUnmount={willUnmount} close={close} className={'novo-contato-overlay'}
                    header={
                        <div className={'novo-contato-header'}>
                            <img src={require('../../assets/images/novo_contato.svg')}/>
                            <Title>Novo contato</Title>
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
                        cargo: '',
                        telefoneComercial: '',
                        celular: '',
                        twitter: '',
                        codigo: '',
                        emails: [
                            {principal: true, email: ''},
                        ],
                        empresas: [],
                    }}
                    validationSchema={validadeSchema}
                    onSubmit={(values, {setSubmiting}) => {
                        console.log(salvar(values))
                    }}
                >
                    {({values, handleSubmit, setFieldValue, submitForm, errors, touched, ...props}) => {
                        handleS = submitForm

                        const hasFoto = values && values.foto && values.foto.toString().trim() !== ''

                        const setEmailPrincipal = (i) => {
                            if(!values[i] || values[i].email === '') return
                            values.emails.forEach((x, i2) => {
                                if(i === i2) setFieldValue(`emails.[${i2}].principal`, true)
                                else setFieldValue(`emails.[${i2}].principal`, false)
                            })
                        }

                        const setEmpresaPrincipal = (i) => {
                            if(values[i].empresas === '') return
                            values.empresas.forEach((x, i2) => {
                                if(i === i2) setFieldValue(`empresas.[${i2}].principal`, true)
                                else setFieldValue(`empresas.[${i2}].principal`, false)
                            })
                        }

                        return <form onSubmit={handleSubmit}>

                            <Row noSpace className={'foto-container'} marginBottom={2}>
                                <img src={hasFoto ? values.foto : emptyImage}/>

                                <Column className={'foto-description'}>
                                    {hasFoto ? <Row noSpace>
                                            <Upload onComplete={v => setFieldValue('foto', v)}><Linq>Alterar foto</Linq></Upload>
                                            <span> - </span>
                                            <Linq onClick={() => setFieldValue('foto', '')}>Remover</Linq>
                                        </Row>
                                        : <Upload onComplete={v => setFieldValue('foto', v)}><Linq>Carregar foto</Linq></Upload>}
                                    <span>E aconselhavel que a imagem da pessoa tenha o mesmo comprimento e altura</span>
                                </Column>
                            </Row>

                            <Field component={Input} name={'nome'} label={'Nome completo'} required placeholder={'Insira o nome desta pessoa'}
                                   error={errors.nome && touched.nome ? errors.nome : null}
                            />
                            <Field component={Input} name={'cargo'} label={'Cargo'} placeholder={'Insira um cargo'}/>

                            <div className={'dados-contato'}>
                                <Row noSpace>
                                    <Subtitle>Pelo menos um desses campos e obrigatorio</Subtitle>
                                    <span className={'required'}> *</span>
                                </Row>

                                <Label marginBottom={1}>E-mail</Label>

                                <FieldArray name={'emails'}
                                            render={arrayHelper => (
                                                <>
                                                    {values.emails.map((item, index) => (
                                                        <InputComRadio key={index}
                                                                       radio={<Field component={RadioTooltip} label={'E-mail principal'} name={`emails.${index}.principal`} onChange={() => setEmailPrincipal(index)}/>}
                                                                       input={<Field component={Input} name={`emails.${index}.email`} placeholder={'Insira um endereco de e-mail'}
                                                                                     error={errors && errors.emails && errors.emails[index] && errors.emails[index].email && touched && touched.emails && touched.emails[index] && touched.emails[index].email ? errors.emails[index].email : null}
                                                                                     endButtons={index > 0 ? <IconButton icon={<i className="far fa-trash-alt" />}
                                                                                                                         label={'Excluir'} onClick={() => arrayHelper.remove(index)}/> : null}/>}
                                                        />
                                                    ))}
                                                    <Row alignRight><AdicionarFormItem onClick={() => arrayHelper.insert(values.emails.length, {principal: false, email: ''})}
                                                                                       block={errors.emails || values.emails.some(v => v.email.trim() === '')} label={'Adicionar outro e-mail'}/></Row>
                                                </>
                                            )} />


                                <Field component={Input} name={'telefoneComercial'} label={'Telefone comercial'} placeholder={'Insira um numero de telefone'}/>
                                <Field component={Input} name={'celular'} label={'Celular'} placeholder={'Insira um numero de telefone'}/>
                                <Field component={Input} name={'twitter'} label={'Twitter'} placeholder={'Informe um twitter'}/>
                                <Field component={Input} name={'codigo'} label={'ID externo exclusivo'} placeholder={'Insira o ID exclusivo do contato'}/>

                            </div>



                            <Label marginBottom={1}>Empresa</Label>

                            <FieldArray name={'empresas'}
                                        render={arrayHelper => (
                                            <>
                                                {values.empresas.map((item, index) => (
                                                    <InputComRadio key={index}
                                                                   radio={<Field component={RadioTooltip} label={'Empresa principal'} name={`empresas.${index}.principal`} onChange={() => setEmpresaPrincipal(index)}/>}
                                                                   input={
                                                                       <EndButtonInput buttons={
                                                                           <>
                                                                               <IconButton icon={<i className="fas fa-ticket-alt" />} label={'Permitir que este contato veja os tickets dessa empresa'} onClick={() => {}}/>
                                                                               <IconButton icon={<i className="far fa-trash-alt" />} label={'Excluir'} onClick={() => arrayHelper.remove(index)}/>
                                                                           </>}>
                                                                           <Field component={CreatableSelect} name={`empresas.${index}.nome`}/>
                                                                       </EndButtonInput>
                                                                   }
                                                    />
                                                ))}
                                                <CreatableSelect
                                                    isClearable
                                                    onChange={handleChangeEmpresa}
                                                    onInputChange={handleInputEmpresaChange}
                                                    options={empresas}
                                                />
                                                <Row marginTop={2} alignRight><AdicionarFormItem onClick={() => arrayHelper.insert(values.empresas.length, {principal: false, empresa: {label: '', value: 0}})}
                                                                                                 block={values.empresas.some(v => v.empresa.value === 0)} label={'Associar outra empresa'}/></Row>
                                            </>
                                        )} />

                        </form>
                    }}
                </Formik>

            </>
        </PanelRight>
    )
}

const mapStateToProps = ({panel, apiData}) => ({
    empresas: apiData.empresas.map(v => ({label: v.nome, value: v.id}))
})

const mapDispatchToProps = dispatch => ({
    close: () => dispatch(esconderPanelNovoContato()),
    salvar: (v) => dispatch(salvarContato(v)),
    pesquisarEmpresas: (v) => dispatch(pesquisarEmpresas(v))
})

export default connect(mapStateToProps, mapDispatchToProps)(NovoContatoForm);
