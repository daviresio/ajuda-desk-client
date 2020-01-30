import {GRUPOS} from "../actions/api-request-actions";
import {EMPRESA, SCORE} from "../actions/api-data/empresa-saga";

const INITIAL_STATE = {
    grupos: [],
    scores: [],
    tipoPlanos: [],
    dataRenovacoes: [],
    tipoEmpresas: [],
    empresas: [],
    error: null,
}

const apiData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GRUPOS.LOADED_SUCCESS:
            return {...state, grupos: action.payload}
        case GRUPOS.LOADED_ERROR:
            return {...state, error: action.payload}
        case SCORE.REQUEST_LIST_SUCESSO:
            return {...state, scores: action.payload}
        case SCORE.REQUEST_LIST_ERROR:
            return {...state, error: action.payload}
        case EMPRESA.REQUEST_LIST_SUCESSO:
            return {...state, empresas: action.payload}
        case EMPRESA.REQUEST_LIST_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}

export default apiData