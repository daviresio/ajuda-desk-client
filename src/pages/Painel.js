import React from 'react';
import Card from "../components/Card";
import Row from "../components/Row";
import Column from "../components/Column";
import Linq from "../components/Linq";
import Subtitle from "../components/Subtitle";
import Divider from "../components/Divider";

const Painel = () => {
    return (
        <div className={'home'}>

            <div className={'resumos'}>
                <Card className={'link-hover'}>
                    <Subtitle>Nao resolvido</Subtitle>
                    <span className={'text-big bold'}>6</span>
                </Card>
                <Card className={'link-hover'}>
                    <Subtitle>Vencido</Subtitle>
                    <span className={'text-big bold text-deactive'}>0</span>
                </Card>
                <Card className={'link-hover'}>
                    <Subtitle>Vence hoje</Subtitle>
                    <span className={'text-big bold text-deactive'}>0</span>
                </Card>
                <Card className={'link-hover'}>
                    <Subtitle>Aberto</Subtitle>
                    <span className={'text-big bold'}>6</span>
                </Card>
                <Card className={'link-hover'}>
                    <Subtitle>Em espera</Subtitle>
                    <span className={'text-big bold text-deactive'}>0</span>
                </Card>
                <Card className={'link-hover'}>
                    <Subtitle>Nao atribuido</Subtitle>
                    <span className={'text-big bold'}>6</span>
                </Card>
            </div>

            <Card className={'card-principal'}>
                <div> </div>
                <div className={'resumo-grafico'}>
                    <div className={'item'}>
                        <Subtitle>Resolvido</Subtitle>
                        <span className={'text-big bold text-deactive'}>0</span>
                    </div>
                    <div className={'item'}>
                        <Subtitle>Recebido</Subtitle>
                        <span className={'text-big bold text-deactive'}>0</span>
                    </div>
                    <div className={'item'}>
                        <Subtitle>Tempo medio ate a primeira resposta</Subtitle>
                        <span className={'text-big bold text-deactive'}>0m</span>
                    </div>
                    <div className={'item'}>
                        <Subtitle>Tempo medio para resposta</Subtitle>
                        <span className={'text-big bold text-deactive'}>0m</span>
                    </div>
                    <div className={'item'}>
                        <Subtitle>Resolucao dentro do SLA</Subtitle>
                        <span className={'text-big bold text-deactive'}>0%</span>
                    </div>
                </div>
            </Card>

            <div className={'relatorios'}>
                <Card>
                    <Row marginBottom={'4'}>
                        <Column>
                            <Subtitle>Tickets nao resolvidos</Subtitle>
                            <span>Em todo o helpdesk</span>
                        </Column>
                        <Linq>Exibir detalhes</Linq>
                    </Row>

                    <Row className={'bold text-deactive'}>
                        <span>Grupo</span>
                        <span>Aberto</span>
                    </Row>
                    <Divider />
                    <Row>
                        <span>Nao Atribuido</span>
                        <span>2</span>
                    </Row>
                    <Divider />
                    <Row>
                        <span>Envio e entrega</span>
                        <span>1</span>
                    </Row>
                    <Divider />
                    <Row>
                        <span>Substituições</span>
                        <span>1</span>
                    </Row>
                    <Divider />
                    <Row>
                        <span>Faturamento</span>
                        <span>1</span>
                    </Row>

                </Card>
                <Card>
                    <Row marginBottom={'4'}>
                        <Column>
                            <Subtitle>Satisfacao do cliente</Subtitle>
                            <span>No helpdesk este mes</span>
                        </Column>
                        <Linq>Exibir detalhes</Linq>
                    </Row>

                    <div className={'card-satisfacao'}>
                        <Column>
                            <Subtitle>Respostas recebidas</Subtitle>
                            <span className={'text-big bold'}>2</span>
                        </Column>
                        <Column>
                            <Subtitle>Positivas</Subtitle>
                            <div className={'text-and-image positive-border'}>
                            <span className={'text-big bold'}>100%</span>
                                <img src={require('../assets/images/emoji_positivo.svg')} />
                            </div>
                        </Column>
                        <Column>
                            <Subtitle>Neutras</Subtitle>
                            <div className={'text-and-image'}>
                            <span className={'text-big bold text-deactive'}>0%</span>
                                <img src={require('../assets/images/emoji_neutro.svg')} />
                            </div>
                        </Column>
                        <Column>
                            <Subtitle>Negativas</Subtitle>
                            <div className={'text-and-image'}>
                            <span className={'text-big bold text-deactive'}>0%</span>
                                <img src={require('../assets/images/emoji_negativo.svg')} />
                            </div>
                        </Column>
                    </div>

                </Card>
                <Card>
                    <Row marginBottom={'4'}>
                        <Column>
                            <Subtitle>Foruns</Subtitle>
                            <span>Em todo o helpdesk</span>
                        </Column>
                    </Row>
                    <div className={'card-foruns'}>
                        <img className={'aguardando-icon'} src={require('../assets/images/aguardando.svg')} alt=""/>
                        <Column>
                            <Subtitle>Aguardando aprovacao</Subtitle>
                            <span className={'text-big bold text-deactive'}>0</span>
                        </Column>

                        <img className={'spam-icon'} src={require('../assets/images/block.svg')} alt=""/>
                        <Column>
                            <Subtitle>Spam</Subtitle>
                            <span className={'text-big bold text-deactive'}>0</span>
                        </Column>
                    </div>
                </Card>

                <Card>
                    <Subtitle>Tarefas</Subtitle>
                    <div className={'nenhuma-tarefa'}>
                        <img src={require('../assets/images/empty_task.svg')} />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Painel;