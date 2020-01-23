import React from 'react';
import Checkbox from "../form/Checkbox";
import UserBox from "../UserBox";
import Column from "../Column";
import Row from "../Row";
import Icon from "../Icon";
import TicketPrioridade from "./TicketPrioridade";
import Card from "../card/Card";
import SelectCustomLabels from "../form/SelectCustomLabels";

const options = [
    {label: 'Aberto', value: 1},
    {label: 'Pendente', value: 2},
    {label: 'Resolvido', value: 3},
    {label: 'Fechado', value: 4},
    {label: 'Esperando cliente', value: 5},
    {label: 'Esperando por terceiros', value: 6},
]

const Ticket = () => {
    return (
        <Card className={'ticket'}>
            <Checkbox/>
            <UserBox/>
            <Row>
            <Column>
                <div className={'title-content'}>
                    <span className={'title'}>Pagamento nao realizado</span>
                    <span>#3</span>
                </div>
                <div className={'detalhes'}>
                    <Icon iconName={'mail'} />
                    <span className={'nome'}>Davi Resio</span>
                    <span>&nbsp; - &nbsp;</span>
                    <span>Criado há 18 horas</span>
                    <span>&nbsp; - &nbsp;</span>
                    <span>Prazo para a primeira resposta vence em um dia</span>
                </div>
            </Column>
            <Column className={'acoes'}>
              <TicketPrioridade/>
              <SelectCustomLabels options={options}/>
            </Column>
            </Row>
        </Card>
    );
};

export default Ticket;