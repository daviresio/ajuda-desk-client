import {MODAL_EXCLUIR_EMPRESA, PANEL_CADASTRO_EMPRESA, NOVO_CONTATO} from "../actions/panel-actions";

const INITIAL_STATE = {
    novoContato: false,
    cadastroEmpresa: {
        visible: false,
        id: null,
    },
    excluirEmpresa: null,
}

const panel = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NOVO_CONTATO.VISIBLE:
            return {...state, novoContato: true}
        case NOVO_CONTATO.HIDDEN:
            return {...state, novoContato: false}
        case PANEL_CADASTRO_EMPRESA.VISIBLE:
            return {...state, cadastroEmpresa: {visible: true, id: action.payload}}
        case PANEL_CADASTRO_EMPRESA.HIDDEN:
            return {...state, cadastroEmpresa: INITIAL_STATE.cadastroEmpresa}
        case MODAL_EXCLUIR_EMPRESA.VISIBLE:
            return {...state, excluirEmpresa: action.payload}
        case MODAL_EXCLUIR_EMPRESA.HIDDEN:
            return {...state, excluirEmpresa: null}
        default:
            return state
    }
}

export default panel