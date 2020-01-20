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
import AdminPage from "../pages/AdminPage";

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
                    <Route path={'/admin'} component={AdminPage}/>
                    <Redirect from={'/'} to={'/painel'} exact={true} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default RoutesConfig;