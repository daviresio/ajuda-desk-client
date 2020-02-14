import React, {useEffect, useState} from 'react';
import Card from "../../components/card/Card";
import Row from "../../components/Row";
import Column from "../../components/Column";
import Title from "../../components/Title";
import Linq from "../../components/Linq";
import TabMenu from "../../components/TabMenu";
import {connect} from "react-redux";
import {buscarEmpresa} from "../../store/actions/empresa-actions";
import PageDividedSecondContentScrollable from "../../layout/PageDividedSecondContentScrollable";
import Anotacao from "./components/Anotacao";

const EmpresaPage = ({match, buscar, empresa = {}}) => {


    useEffect(() => {
        const {id} = match.params
        buscar(id)
    }, [match.params])

    const emptyImage = require('../../assets/images/empty_image_empresa_logo.svg')

    const [tabSelected, setTabSelected] = useState(0)

    return (
        <PageDividedSecondContentScrollable className={'empresa-page'}

                                            first={
                                                <div className={'main-content-empresa-page'}>
                                                    <Card>
                                                        <Row noSpace className={'foto-container'}>
                                                            <div
                                                                className={'inner-foto-container inner-foto-container-empresa-empty'}>
                                                                <img src={emptyImage}/>
                                                            </div>

                                                            <Column className={'description'}>
                                                                <Title>{empresa.nome}</Title>
                                                                {empresa && empresa.contatos && empresa.contatos.length ?
                                                                    <>
                                                                <Linq className={'qtd-contatos'}>{`${empresa.contatos.length} Contatos`}</Linq>
                                                                <Row noSpace>
                                                                    {empresa && empresa.dominios && empresa.dominios.map((v, i) => i === 0 ?
                                                                        <Linq key={v}>{v}</Linq> : <div> , <Linq key={v}>{v}</Linq></div>)}
                                                                </Row>
                                                                   </> : null}
                                                            </Column>
                                                        </Row>
                                                    </Card>
                                                    <TabMenu tabs={['LINHA DO TEMPO', 'TICKETS', 'ANOTACOES']}
                                                             selected={i => setTabSelected(i)}/>

                                                    <div className={'tab-content'}>
                                                        <Anotacao/>
                                                    </div>

                                                </div>
                                            }

                                            second={
                                                <div className={'second-content-empresa-page'}>
                                                    <div className={'content-second-content-empresa-page'}>
                                                        <ContentDropdown title={`CONTATOS (1)`}>
                                                            fsdgdfgxcvxcgbdfgfzgvbxcvgbcf
                                                        </ContentDropdown>
                                                        <ContentDropdown title={`POLITICAS DE SLA`}>
                                                            <Linq>Politicas de SLA Padrao</Linq>
                                                        </ContentDropdown>
                                                        <ContentDropdown title={`DETALHES`}>
                                                            <div className={'text-deactive margin-bottom'}>Tipo de
                                                                conta
                                                            </div>
                                                            <span>Basica</span>
                                                        </ContentDropdown>
                                                        <ContentDropdown title={`TAREFAS`}>
                                                            fsdgdfgxcvxcgbdfgfzgvbxcvgbcf
                                                        </ContentDropdown>

                                                    </div>
                                                </div>
                                            }
        />
    );
};

const mapStateToProps = ({apiData}) => ({
    empresa: apiData.empresa,
})

const mapDispatchToProps = dispatch => ({
    buscar: (v) => dispatch(buscarEmpresa(v)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EmpresaPage);


const ContentDropdown = ({title, children, className}) => {

    const [isOpen, setOpen] = useState(false)

    let c = 'content-dropdown'
    if (className) c = c + ` ${className}`
    if (isOpen) c = c + ' content-dropdown-open'

    return (
        <div className={c}>
            <Row onClick={() => setOpen(prev => !prev)} className={'content-dropdown-header'}>
                <span className={'content-dropdown-title'}>{title}</span>
                <i className={isOpen ? `fas fa-chevron-down icon-rotate` : `fas fa-chevron-down icon-no-rotate`}/>
            </Row>
            {children}
        </div>
    )
}