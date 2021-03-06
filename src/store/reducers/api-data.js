import {GRUPOS} from "../actions/api-request-actions";
import {EMPRESA, SCORE, TIPO_EMPRESA, TIPO_PLANO} from "../actions/empresa-actions";

const INITIAL_STATE = {
    grupos: [],
    scores: [],
    tipoEmpresas: [],
    tipoPlanos: [],
    dataRenovacoes: [],
    empresas: [],
    empresa: {},
    error: null,
}

const apiData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GRUPOS.LIST_SUCCESS:
            return {...state, grupos: action.payload}
        case SCORE.REQUEST_LIST_SUCESSO:
            return {...state, scores: action.payload}
        case TIPO_EMPRESA.REQUEST_LIST_SUCESSO:
            return {...state, tipoEmpresas: action.payload}
        case TIPO_PLANO.REQUEST_LIST_SUCESSO:
            return {...state, tipoPlanos: action.payload}
        case EMPRESA.LIST_SUCESSO:
            return {...state, empresas: action.payload}
        case EMPRESA.BUSCAR_SUCESSO:
            return {...state, empresa: action.payload}
        case EMPRESA.EDITAR_SUCESSO:
        case EMPRESA.CLEAR:
            return {...state, empresa: INITIAL_STATE.empresa}
        default:
            return state
    }
}

export default apiData