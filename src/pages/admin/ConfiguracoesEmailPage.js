import React from 'react';
import Card from "../../components/card/Card";
import Row from "../../components/Row";
import Title from "../../components/Title";
import Button from "../../components/button/Button";
import InputPesquisa from "../../components/form/InputPesquisa";
import Subtitle from "../../components/Subtitle";
import {withRouter} from "react-router-dom";
import PageDividedSecondContentScrollable from "../../layout/PageDividedSecondContentScrollable";

const ConfiguracoesEmailPage = ({history}) => {
    return (
        <div className={'configuracoes-email-page'}>
            <PageDividedSecondContentScrollable
            first={
                <Card className={'page-full-height'}>
                    <Row>
                        <Title>Configuracoes de e-mail</Title>
                        <div className={'buttons'}>
                            <Button className={'margin-right-2'} label={
                                <>
                                    <i className="fas fa-cogs" />
                                    Configuracoes avancadas
                                </>
                            } />
                            <Button label={'Novo e-mail de suporte'} color={'dark'} onClick={() => history.push('email/cadastro')} />
                        </div>
                    </Row>
                    <div className={'input-pesquisa'}>
                        <InputPesquisa/>
                    </div>
                </Card>
            }
            second={
                <Card>
                    <Subtitle>Configurações de e-mail</Subtitle>
                    <p>
                        Você pode gerenciar todas as suas caixas de correio de suporte aqui. Qualquer e-mail enviado para o seu endereço de e-mail de suporte, por exemplo: support@danibruninha001.freshdesk.com será convertido automaticamente em um ticket no qual você pode trabalhar.
                    </p>

                    <p>
                        Você pode configurar sua conta do Freshdesk para usar um e-mail de suporte com seu próprio domínio, como suporte@minhaempresa.com, encaminhando e-mails desse endereço para support@danibruninha001.freshdesk.com
                    </p>

                    <p>
                        Para criar uma nova caixa de e-mail de suporte, clique em “Novo e-mail de suporte” nas configurações de e-mail.
                    </p>
                    <p />
                    <Subtitle>Usando várias caixas de correio</Subtitle>

                    <p>
                        Você pode adicionar caixas de correio de entrada e de saída ilimitadas (como info@suaempresa.com, vendas@suaempresa.com, etc.) em seu suporte técnico. Você pode até configurar o Freshdesk para atribuir automaticamente os e-mails de cada caixa de correio a um grupo específico.
                    </p>

                    <p>
                        Os e-mails de resposta do Freshdesk usarão automaticamente seus respectivos ID de e-mail de suporte como o endereço de e-mail De. Criar um registro SPF no seu arquivo de zona DNS garantirá a entrega adequada de e-mails.
                    </p>
                </Card>
            }
            />



        </div>
    );
};

export default withRouter(ConfiguracoesEmailPage);