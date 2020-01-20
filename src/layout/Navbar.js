import React from 'react';
import Icon from "../components/Icon";
import {Link, withRouter} from "react-router-dom";

const Navbar = ({location}) => {

    const isActive = v => location.pathname.includes(v)

    return (
        <nav className={'nav'}>
            <Link className={'logo-container'} to={'/painel'}>
                <img src={require('../assets/images/navbar_logo.svg')}/>
            </Link>
            <div className={'itens'}>
                    <NavItem iconName={'speed'} route={'painel'} active={isActive('painel')}/>
                    <NavItem iconName={'confirmation_number'} route={'tickets'} active={isActive('tickets')}/>
                    <NavItem iconName={'person_outline'} route={'contatos'} active={isActive('contatos')}/>
                    <NavItem iconName={'business'} route={'empresas'} active={isActive('empresas')}/>
                    <NavItem iconName={'chrome_reader_mode'} route={'solucoes'} active={isActive('solucoes')}/>
                    <NavItem iconName={'device_hub'} route={'bots'} active={isActive('bots')}/>
                    <NavItem iconName={'assessment'} route={'analises'} active={isActive('analises')}/>
                    <NavItem iconName={'settings_applications'} route={'admin'} active={isActive('admin')}/>
            </div>
        </nav>
    );
};

export default withRouter(Navbar);


const NavItem = ({iconName, active, route, ...props}) => {
    //console.log(props)
    return <Link className={active ? 'nav-item nav-item-active' : 'nav-item'} to={`/${route}`}>
        <Icon iconName={iconName}/>
    </Link>
}