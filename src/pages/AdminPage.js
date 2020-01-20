import React from 'react';
import Card from "../components/Card";
import Subtitle from "../components/Subtitle";
import Divider from "../components/Divider";
import {Link} from "react-router-dom";

const AdminPage = () => {
    return (
        <div className={'admin-page'}>

            <Card className={'card-admin-menus'}>
                <Subtitle>Canais de suporte</Subtitle>
                <Divider/>
                <div className={'card-content-admin-menu'}>
                <LinkItem icon={require('../assets/images/admin/suporte/email.svg')} label={'E-mail'} route={'/admin/email'} color={'green'} />
                <LinkItem icon={require('../assets/images/admin/suporte/portais.svg')} label={'Portais'} route={'/admin/portais'} color={'green'} />
                <LinkItem icon={require('../assets/images/admin/suporte/chat.svg')} label={'Chat'} route={'/admin/chat'} color={'green'} />
                <LinkItem icon={require('../assets/images/admin/suporte/telefone.svg')} label={'Telefone'} route={'/admin/telefone'} color={'green'} />
                <LinkItem icon={require('../assets/images/admin/suporte/twitter.svg')} label={'Twitter'} route={'/admin/twitter'} color={'green'} />
                <LinkItem icon={require('../assets/images/admin/suporte/facebook.svg')} label={'Facebook'} route={'/admin/facebook'} color={'green'} />
                <LinkItem icon={require('../assets/images/admin/suporte/formulario.svg')} label={'Formulario de feedback'} route={'/admin/formulario-feedback'} color={'green'} />
                <LinkItem icon={require('../assets/images/admin/suporte/widgets.svg')} label={'Widgets'} route={'/admin/widgets'} color={'green'} />
                <LinkItem icon={require('../assets/images/admin/suporte/bot.svg')} label={'Bots'} route={'/admin/bots'} color={'green'} />
                </div>
            </Card>

            <Card className={'card-admin-menus'}>
                <Subtitle>Canais de suporte</Subtitle>
                <Divider/>
                <div className={'card-content-admin-menu'}>
                <LinkItem icon={require('../assets/images/admin/configuracoes_gerais/helpdesk.svg')} label={'Helpdesk'} route={'/admin/helpdesk'} color={'purple'} />
                <LinkItem icon={require('../assets/images/admin/configuracoes_gerais/campos_ticket.svg')} label={'Campos de ticket'} route={'/admin/campos-ticket'} color={'purple'} />
                <LinkItem icon={require('../assets/images/admin/configuracoes_gerais/campos_cliente.svg')} label={'Campos de cliente'} route={'/admin/campos-cliente'} color={'purple'} />
                <LinkItem icon={require('../assets/images/admin/configuracoes_gerais/agentes.svg')} label={'Agentes'} route={'/admin/agentes'} color={'purple'} />
                <LinkItem icon={require('../assets/images/admin/configuracoes_gerais/grupos.svg')} label={'Grupos'} route={'/admin/grupos'} color={'purple'} />
                <LinkItem icon={require('../assets/images/admin/configuracoes_gerais/funcoes.svg')} label={'Funcoes'} route={'/admin/funcoes'} color={'purple'} />
                <LinkItem icon={require('../assets/images/admin/configuracoes_gerais/seguranca.svg')} label={'Seguranca'} route={'/admin/seguranca'} color={'purple'} />
                <LinkItem icon={require('../assets/images/admin/configuracoes_gerais/politicas_sla.svg')} label={'Politicas de SLA'} route={'/admin/politicas-sla'} color={'purple'} />
                <LinkItem icon={require('../assets/images/admin/configuracoes_gerais/horario_comercial.svg')} label={'Horario comercial'} route={'/admin/horario-comercial'} color={'purple'} />
                <LinkItem icon={require('../assets/images/admin/configuracoes_gerais/varios_produtos.svg')} label={'Varios produtos'} route={'/admin/varios-produtos'} color={'purple'} />
                <LinkItem icon={require('../assets/images/admin/configuracoes_gerais/tags.svg')} label={'Tags'} route={'/admin/tags'} color={'purple'} />
                <LinkItem icon={require('../assets/images/admin/configuracoes_gerais/gerenciamento_servico_campo.svg')} label={'Gerenciamento de servico de campo'} route={'/admin/gerenciamento-servico-campo'} color={'purple'} />
                </div>
            </Card>

            <Card className={'card-admin-menus'}>
                <Subtitle>Produtividade do helpdesk</Subtitle>
                <Divider/>
                <div className={'card-content-admin-menu'}>
                    <LinkItem icon={require('../assets/images/admin/produtividade/automacoes.svg')} label={'Automacoes'} route={'/admin/'} color={'blue'} />
                    <LinkItem icon={require('../assets/images/admin/produtividade/automacoes_de_cenarios.svg')} label={'Automacao de cenarios'} route={'/admin/'} color={'blue'} />
                    <LinkItem icon={require('../assets/images/admin/produtividade/modelos_de_ticket.svg')} label={'Modelos de ticket'} route={'/admin/'} color={'blue'} />
                    <LinkItem icon={require('../assets/images/admin/produtividade/notificacao_de_email.svg')} label={'Notificacoes de e-mail'} route={'/admin/'} color={'blue'} />
                    <LinkItem icon={require('../assets/images/admin/produtividade/respostas_pre_definidas.svg')} label={'Respostas predefinidas'} route={'/admin/'} color={'blue'} />
                    <LinkItem icon={require('../assets/images/admin/produtividade/formularios_pre_definidos.svg')} label={'Formularios predefinidos'} route={'/admin/'} color={'blue'} />
                    <LinkItem icon={require('../assets/images/admin/produtividade/satisfacao_do_cliente.svg')} label={'Satisfacao do cliente'} route={'/admin/'} color={'blue'} />
                    <LinkItem icon={require('../assets/images/admin/produtividade/arcade.svg')} label={'Arcade'} route={'/admin/'} color={'blue'} />
                    <LinkItem icon={require('../assets/images/admin/produtividade/aplicativos.svg')} label={'Aplicativos'} route={'/admin/'} color={'blue'} />
                    <LinkItem icon={require('../assets/images/admin/produtividade/ominiroute.svg')} label={'Ominiroute'} route={'/admin/'} color={'blue'} />
                    <LinkItem icon={require('../assets/images/admin/produtividade/reproducao_de_secao.svg')} label={'Reproducao de sessao'} route={'/admin/'} color={'blue'} />
                    <LinkItem icon={require('../assets/images/admin/produtividade/gerenciamento_tickets_avancado.svg')} label={'Gerenciamento de tickets avancado'} route={'/admin/'} color={'blue'} />
                    <LinkItem icon={require('../assets/images/admin/produtividade/comunicacao_pro_ativa.svg')} label={'Comunicacao pro-ativa'} route={'/admin/'} color={'blue'} />
                    <LinkItem icon={require('../assets/images/admin/produtividade/habilidades_do_titiu.svg')} label={'Habilidades do Titiu'} route={'/admin/'} color={'blue'} />
                </div>
            </Card>

            <Card className={'card-admin-menus'}>
                <Subtitle>Configuracoes da conta</Subtitle>
                <Divider/>
                <div className={'card-content-admin-menu'}>
                    <LinkItem icon={require('../assets/images/admin/configuracoes_conta/conta.svg')} label={'Conta'} route={'/admin/conta'} color={'orange'} />
                    <LinkItem icon={require('../assets/images/admin/configuracoes_conta/planos_cobranca.svg')} label={'Planos e cobrancas'} route={'/admin/planos-cobranca'} color={'orange'} />
                    <LinkItem icon={require('../assets/images/admin/configuracoes_conta/importar_dados.svg')} label={'Importar dados'} route={'/admin/importar-dados'} color={'orange'} />
                    <LinkItem icon={require('../assets/images/admin/configuracoes_conta/acesso_de_um_dia.svg')} label={'Acesso de um dia'} route={'/admin/acesso-um-dia'} color={'orange'} />
                    <LinkItem icon={require('../assets/images/admin/configuracoes_conta/log_de_auditoria.svg')} label={'Log de auditoria'} route={'/admin/log-auditoria'} color={'orange'} />
                    <LinkItem icon={require('../assets/images/admin/configuracoes_conta/ticket_activity_export.svg')} label={'Ticket activity export'} route={'/admin/ticket-activity-export'} color={'orange'} />
                </div>
            </Card>

        </div>
    );
};

export default AdminPage;

const LinkItem = ({route, icon, label, color}) => {
    return <Link className={`item-link-admin item-link-admin-color-${color}`} to={route}>
               <img width={28} src={icon}/>
                <span>{label}</span>
        </Link>

}