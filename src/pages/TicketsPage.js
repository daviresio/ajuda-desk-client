import React from 'react';
import Subtitle from "../components/Subtitle";
import Ticket from "../components/ticket/Ticket";
import MultiSelect from "../components/form/MultiSelect";

const TicketsPage = () => {
    return (
        <div className={'tickets-page'}>
            <div className={'content-ticket-page'}>
            <Ticket/>
            <Ticket/>
            <Ticket/>
            <Ticket/>
            </div>
            <div className={'filters'}>
                <Subtitle>Filtros</Subtitle>
                <div>
                    <label>Agentes</label>
                    <MultiSelect options={[
                        {label: 'Davi Resio', value: 1},
                        {label: 'Daniele Bruna', value: 2},
                        {label: 'Danilo', value: 3},
                        {label: 'Daniel', value: 4},
                        {label: 'nao atribuido', value: 5},
                    ]} />
                </div>
            </div>
        </div>
    );
};

export default TicketsPage;