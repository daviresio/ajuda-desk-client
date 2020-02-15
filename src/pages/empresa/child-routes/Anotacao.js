import React, {useEffect, useState} from 'react';
import Card from "../../../components/card/Card";
import Input from "../../../components/form/Input";
import {Editor} from "@tinymce/tinymce-react";
import Row from "../../../components/Row";
import Button from "../../../components/button/Button";
import {
    changeFormValueAnotacao,
    esconderFormAnotacao,
    exibirFormAnotacao,
    salvarAnotacao
} from "../../../store/actions/anotacao-actions";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Subtitle from "../../../components/Subtitle";

const Anotacao = ({anotacoes, save, formVisible, exibirForm, esconderForm, match, formValue, changeFormValue}) => {

    useEffect(() => {
                console.log(match)
    }, [anotacoes])


    const handleEditorChange = (content, editor) => {
        changeFormValue({...formValue, conteudo: content})
    }

    const showContent = () => {
        if (!formVisible) exibirForm()
    }

    const hideContent = () => {
        esconderForm()
    }

    const handleSubmit = () => {
        const value = {}
        value.empresa_id = match.params.id
        save(value)
    }

    return (
        <>
            <Card
                className={formVisible ? 'empresa-page-anotacao empresa-page-anotacao-visible' : 'empresa-page-anotacao empresa-page-anotacao-hidden'}>
                <Input placeholder={'Sobre oque `e esta anotacao?'} className={'margin-bottom-2'}
                       onClickContainer={showContent}/>
                <Editor
                    apiKey={'pyq2hmb4zvj2o7kq39stpr7kp6w0onsutdnh1hwshn7omlgs'}
                    initialValue={""}
                    value={formValue.conteudo}
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help',
                        paste_data_images: true,
                    }}
                    onEditorChange={handleEditorChange}
                />
                <Row noSpace className={'empresa-page-anotacao-footer'}>
                    <Button label={'Cancelar'} marginRight={'2'} onClick={hideContent}/>
                    <Button color={'dark'} label={'Adicionar anotacao'} marginRight={'5rem'} onClick={handleSubmit}/>
                </Row>
            </Card>

            {anotacoes ? anotacoes.map(v =>
            <Card>
                <Subtitle>{v.titulo}</Subtitle>
                <div>{v.conteudo}</div>
            </Card>
            ) : null}
        </>
    );
};

const mapStateToProps = ({apiData, control}) => ({
    anotacoes: apiData.empresa.anotacoes,
    formVisible: control.anotacaoForm.visible,
    formValue: control.anotacaoForm.value,
})

const mapDispatchToProps = dispatch => ({
    save: v => dispatch(salvarAnotacao(v)),
    exibirForm: () => dispatch(exibirFormAnotacao()),
    esconderForm: () => dispatch(esconderFormAnotacao()),
    changeFormValue: (v) => dispatch(changeFormValueAnotacao(v)),
})

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Anotacao);