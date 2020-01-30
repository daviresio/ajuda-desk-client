import {all, call, put, takeEvery} from "redux-saga/effects";
import api from "../../../config/network";
import {CONTATO} from "../api-request-actions";
import {EMPRESA} from "./empresa-saga";


export const dadosDefaultNovaEmpresa = (v) => ({type: CONTATO.DEFAULT_REQUESTS})

function* dadosDefaultRequest() {
    try {
        const {data} = yield call(api.get, '/empresas')
        yield put({type: EMPRESA.REQUEST_LIST_SUCESSO, payload: data})
    } catch (e) {
        yield put({type: EMPRESA.REQUEST_LIST_ERROR, payload: e})
    }
}

function* saveRequest({payload: v}) {
    try {
        const {data} = yield call(api.post, '/contatos', v)
        yield put({type: CONTATO.SALVAR_SUCESSO, payload: data})
    } catch (e) {
        yield put({type: CONTATO.SALVAR_ERRO, payload: e})
    }
}

export const salvarContato = (v) => ({type: CONTATO.SALVAR_REQUEST, payload: v})


function* contatosSaga() {
    yield all([
        takeEvery(CONTATO.SALVAR_REQUEST, saveRequest),
        takeEvery(CONTATO.DEFAULT_REQUESTS, dadosDefaultRequest),
    ])
}

export default contatosSaga