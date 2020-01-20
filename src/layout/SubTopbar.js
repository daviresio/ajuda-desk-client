import React from 'react';
import Row from "../components/Row";
import Linq from "../components/Linq";
import Icon from "../components/Icon";

const SubTopbar = () => {
    return (
        <div className={'subtopbar'}>
            <Row>
                <div className={'grupos'}>
                    <span>Todos os grupos</span> <i className="fas fa-chevron-down"></i>
                </div>
                <Linq>Atividades recentes <i className="fas fa-chevron-right" /> </Linq>
            </Row>
        </div>
    );
};

export default SubTopbar;