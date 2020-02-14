import React, {useState} from 'react';
import Card from "../../../components/card/Card";
import Input from "../../../components/form/Input";
import {Editor} from "@tinymce/tinymce-react";
import Row from "../../../components/Row";
import Button from "../../../components/button/Button";

const Anotacao = () => {

    const [isVisible, setVisible] = useState(false)
    const [anotacaoValue, setAnotacaoValue] = useState('')

    const handleEditorChange = (content, editor) => {
        setAnotacaoValue(content)
    }

    const showContent = () => {
        if(!isVisible) setVisible(true)
    }

    return (
        <Card className={isVisible ? 'empresa-page-anotacao empresa-page-anotacao-visible' : 'empresa-page-anotacao empresa-page-anotacao-hidden'}>
            <Input placeholder={'Sobre oque `e esta anotacao?'} className={'margin-bottom-2'} onClickContainer={showContent} />
            <Editor
                apiKey={'pyq2hmb4zvj2o7kq39stpr7kp6w0onsutdnh1hwshn7omlgs'}
                initialValue={""}
                value={anotacaoValue}
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
                <Button label={'Cancelar'} marginRight={'2'} onClick={()=> setVisible(false)} />
                <Button color={'dark'} label={'Adicionar anotacao'} marginRight={'5rem'} />
            </Row>
        </Card>
    );
};

export default Anotacao;