import React from 'react';
import Row from "../components/Row";
import Subtitle from "../components/Subtitle";
import Icon from "../components/Icon";
import UserBox from "../components/UserBox";
import DropdownButton from "../components/button/DropdownButton";
import {connect} from "react-redux";
import {openPanelCadastroEmpresa, exibirPanelNovoContato} from "../store/actions/panel-actions";

const Topbar = ({novoContato, novaEmpresa}) => {
    return (
        <div className={'topbar'}>
            <Row>
                <div className={'paineis'}>
                    <div className={'button-container'}>
                        <i className="fas fa-bars"/>
                    </div>
                    <Subtitle>Meu painel</Subtitle>
                </div>
                <div className={'lado-direito'}>

                    <div className={'acoes'}>
                        <DropdownButton label={'Novo'}
                                        options={[
                                            'Novo ticket',
                                            'Novo e-mail',
                                            'Novo contato',
                                            'Nova empresa',
                                        ]}

                                        onClick={i => {
                                            switch (i) {
                                                case 0:

                                                    break;
                                                case 1:

                                                    break;
                                                case 2:
                                                    novoContato()
                                                    break;
                                                case 3:
                                                    novaEmpresa()
                                                    break;
                                            }
                                        }}
                        />
                    </div>

                    <div className={'separador'}/>

                    <div className={'opcoes'}>
                        <div className={'click-para-pesquisar'}>
                            <i className={'fa fa-search'}/>
                            <span className={'text-deactive'}>Pesquisar</span>
                        </div>
                        <Icon iconName={'notifications'}/>
                        <Icon iconName={'new_releases'}/>
                        <UserBox/>
                    </div>
                </div>
            </Row>
        </div>
    );
};

const mapStateToProps = ({}) => ({

})

const mapDispatchToProps = dispatch => ({
    novoContato: () => dispatch(exibirPanelNovoContato()),
    novaEmpresa: () => dispatch(openPanelCadastroEmpresa()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);