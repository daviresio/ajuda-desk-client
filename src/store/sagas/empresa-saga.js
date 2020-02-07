import {all, call, put, takeEvery, takeLatest} from "redux-saga/effects";
import api from "../../config/network";
import {EMPRESA, SCORE} from "../actions/empresa-actions";
import { toast } from "react-toastify";


function* pesquisar({payload: v}) {
    try {
        const {data} = yield call(api.get, `/empresas?nome=${v}`)
        yield put({type: EMPRESA.LIST_SUCESSO, payload: data})
    } catch (e) {
        yield put({type: EMPRESA.LIST_SUCESSO, payload: e})
    }
}

function* dadosDefaultRequest() {
    try {
        const {data} = yield call(api.get, '/scores')
        yield put({type: SCORE.REQUEST_LIST_SUCESSO, payload: data})
    } catch (e) {
        yield put({type: SCORE.REQUEST_LIST_ERROR, payload: e})
    }
}


function* saveRequest({payload: v}) {
    try {
        const {data} = yield call(api.post, '/empresas', v)
        yield put({type: EMPRESA.SALVAR_SUCESSO, payload: data})
        toast.success('🚀 Empresa criada!')
    } catch (e) {
        yield put({type: EMPRESA.SALVAR_ERRO, payload: e})
        toast.error('😫 Ocorreu um erro no servidor')
    }
}


function* buscar({payload: v}) {
    try {
        const {data} = yield call(api.get, `/empresas/${v}`)
        yield put({type: EMPRESA.BUSCAR_SUCESSO, payload: data})
    } catch (e) {
        yield put({type: EMPRESA.BUSCAR_ERRO, payload: e})
        toast.error('🙉 Nao foi possivel carregar a empresa')
    }
}



function* empresaSaga() {
    yield all([
        takeEvery(EMPRESA.DEFAULT_REQUESTS, dadosDefaultRequest),
        takeEvery(EMPRESA.SALVAR_REQUEST, saveRequest),
        takeEvery(EMPRESA.PESQUISAR, pesquisar),
        takeEvery(EMPRESA.BUSCAR, buscar),
    ])
}

export default empresaSaga