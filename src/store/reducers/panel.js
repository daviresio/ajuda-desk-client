import {NOVA_EMPRESA, NOVO_CONTATO} from "../actions/panel-actions";

const INITIAL_STATE = {
    novoContato: false,
    novaEmpresa: false,
}

const panel = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NOVO_CONTATO.VISIBLE:
            return {...state, novoContato: true}
        case NOVO_CONTATO.HIDDEN:
            return {...state, novoContato: false}
        case NOVA_EMPRESA.VISIBLE:
            return {...state, novaEmpresa: true}
        case NOVA_EMPRESA.HIDDEN:
            return {...state, novaEmpresa: false}
        default:
            return state
    }
}

export default panel