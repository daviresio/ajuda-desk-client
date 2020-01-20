import React from 'react';
import Row from "../components/Row";
import Subtitle from "../components/Subtitle";
import Icon from "../components/Icon";
import UserBox from "../components/UserBox";

const Topbar = () => {
    return (
        <div className={'topbar'}>
            <Row>
                <div className={'paineis'}>
                    <div className={'button-container'}>
                        <i className="fas fa-bars" />
                    </div>
                    <Subtitle>Meu painel</Subtitle>
                </div>
                <div className={'opcoes'}>
                    <Icon iconName={'notifications'} />
                    <Icon iconName={'new_releases'} />
                    <UserBox/>

                </div>
            </Row>
        </div>
    );
};

export default Topbar;