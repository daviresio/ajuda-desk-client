import {all, call, put, takeEvery} from "redux-saga/effects";
import api from "../../config/network";
import {EMPRESA} from "../actions/empresa-actions";
import {CONTATO} from "../actions/contato-actions";


function* dadosDefaultRequest() {
    try {
        const {data} = yield call(api.get, '/contato/empresas')
        yield put({type: EMPRESA.REQUEST_LIST_SUCESSO, payload: data})
    } catch (e) {
        yield put({type: EMPRESA.REQUEST_LIST_ERROR, payload: e})
    }
}

function* saveRequest({payload: v}) {
    try {
        const {data} = yield call(api.post, '/contatos', v)
        console.log(data)
        yield put({type: CONTATO.SALVAR_SUCESSO, payload: data})
    } catch (e) {
        yield put({type: CONTATO.SALVAR_ERRO, payload: e})
    }
}


function* contatosSaga() {
    yield all([
        takeEvery(CONTATO.SALVAR_REQUEST, saveRequest),
        takeEvery(CONTATO.DEFAULT_REQUESTS, dadosDefaultRequest),
    ])
}

export default contatosSaga