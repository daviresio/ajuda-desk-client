import {take, takeEvery, put, call, all} from 'redux-saga/effects'
import {NOVA_EMPRESA, NOVO_CONTATO} from "../actions/panel-actions";



export const exibirPanelNovoContato = () => ({type: NOVO_CONTATO.VISIBLE})

export const esconderPanelNovoContato = () => ({type: NOVO_CONTATO.HIDDEN})

export const exibirPanelNovaEmpresa = () => ({type: NOVA_EMPRESA.VISIBLE})

export const esconderPanelNovaEmpresa = () => ({type: NOVA_EMPRESA.HIDDEN})


function* panelSaga() {
    yield all([

    ])
}

export default panelSaga