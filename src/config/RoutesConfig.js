import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Painel from "../pages/Painel";
import Layout from "../layout/Layout";
import TicketsPage from "../pages/TicketsPage";
import ContatosPage from "../pages/ContatosPage";
import EmpresasPage from "../pages/EmpresasPage";
import SolucoesPage from "../pages/SolucoesPage";
import BotsPage from "../pages/BotsPage";
import AnalisesPage from "../pages/AnalisesPage";
import AdminPage from "../pages/admin/AdminPage";
import ConfiguracoesEmailPage from "../pages/admin/ConfiguracoesEmailPage";
import CadastroConfiguracaoEmailPage from "../pages/admin/CadastroConfiguracaoEmailPage";

const RoutesConfig = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path={'/painel'} component={Painel}/>
                    <Route path={'/tickets'} component={TicketsPage}/>
                    <Route path={'/contatos'} component={ContatosPage}/>
                    <Route path={'/empresas'} component={EmpresasPage}/>
                    <Route path={'/solucoes'} component={SolucoesPage}/>
                    <Route path={'/bots'} component={BotsPage}/>
                    <Route path={'/analises'} component={AnalisesPage}/>
                    <Route path={'/admin'} exact={true} component={AdminPage}/>
                    <Route path={'/admin/email'} exact={true} component={ConfiguracoesEmailPage}/>
                    <Route path={'/admin/email/cadastro'} component={CadastroConfiguracaoEmailPage}/>
                    <Redirect from={'/'} to={'/painel'} exact={true} />
                    <Redirect from={'/index.html'} to={'/painel'} exact={true} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default RoutesConfig;