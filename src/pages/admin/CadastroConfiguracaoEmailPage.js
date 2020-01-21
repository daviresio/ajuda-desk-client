import React from 'react';
import Card from "../../components/card/Card";
import Title from "../../components/Title";
import Input from "../../components/form/Input";
import Subtitle from "../../components/Subtitle";
import CardWithHeader from "../../components/card/CardWithHeader";
import Column from "../../components/Column";
import Row from "../../components/Row";
import Linq from "../../components/Linq";
import PageDividedSecondContentScrollable from "../../layout/PageDividedSecondContentScrollable";

const CadastroConfiguracaoEmailPage = () => {
    return (
        <div className={'cadastro-configuracoes-email-page'}>
            <PageDividedSecondContentScrollable
            first={
                <Card className={'page-full-height'}>
                    <Title>Configuracoes de e-mail</Title>

                    <div className={'inputs-top'}>
                        <Input label={'Nome'} detail={'Nome do e-mail que será usado nas respostas dos tickets'}/>
                        <Input label={'Seu e-mail de suporte'} required detail={'Esse também é o seu e-mail para respostas (por exemplo, suporte@suaempresa.com)'}/>
                    </div>

                    <CardWithHeader className={'configuracao-servidor-email'}
                                    header={
                                        <Column>
                                            <Row noSpace>
                                                <Subtitle>Servidor de e-mail</Subtitle>
                                                <img src={require('../../assets/images/logo.svg')}/>
                                            </Row>
                                            <div className={'radio-group'}>
                                                <div><input type={'radio'}/> <span>Padrao</span></div>
                                                <div className={'radio'}> <input type={'radio'}/> <span>Use seu proprio servidor de e-mail</span></div>
                                            </div>
                                        </Column>
                                    }>


                        <Linq>Como converter seus e-mails em tickets do Ajudadesk <i className="far fa-question-circle" /></Linq>
                    </CardWithHeader>

                </Card>
            }
            second={
                <Card>
                    <Subtitle>Configurações de e-mail</Subtitle>
                    <p>
                        Digite seu endereço de e-mail de suporte para começar. Qualquer email enviado para aqui é convertido
                        automaticamente em um ticket no qual você pode trabalhar.
                    </p>
                    <p>
                        Você pode configurar sua conta do Freshdesk para usar um e-mail de suporte com seu próprio domínio,
                        como suporte@minhaempresa.com, encaminhando e-mails desse endereço para o endereço de e-mail de
                        encaminhamento do Freshdesk.
                    </p>

                    <Subtitle>Usando várias caixas de correio</Subtitle>
                    <p>
                        Você pode adicionar caixas de correio de entrada e de saída ilimitadas (como info@suaempresa.com,
                        vendas@suaempresa.com, etc.) em seu suporte técnico. Você pode até configurar o Freshdesk para
                        atribuir automaticamente os e-mails de cada caixa de correio a um grupo específico.
                    </p>
                    <p>
                        Os e-mails de resposta do Freshdesk usarão automaticamente seus respectivos ID de e-mail de suporte
                        como o endereço de e-mail De. Criar um registro SPF no seu arquivo de zona DNS garantirá a entrega
                        adequada de e-mails.
                    </p>
                </Card>
            }
            />

        </div>
    );
};

export default CadastroConfiguracaoEmailPage;