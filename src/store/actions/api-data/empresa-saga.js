import {all, call, put, takeEvery, takeLatest} from "redux-saga/effects";
import api from "../../../config/network";

export const EMPRESA = {
    DEFAULT_REQUESTS: 'NOVA_EMPRESA_DEFAULT_REQUESTS_INIT',
    PESQUISAR: 'EMPRESA_PESQUISAR',
    SALVAR_REQUEST: 'SALVAR_EMPRESA_REQUEST',
    SALVAR_SUCESSO: 'SALVAR_EMPRESA_SUCESSO',
    SALVAR_ERRO: 'SALVAR_EMPRESA_ERRO',
}

export const SCORE = {
    REQUEST_LIST_SUCESSO: 'SCORE_LIST_SUCCESS',
    REQUEST_LIST_ERROR: 'SCORE_LIST_ERROR',
}

export const pesquisarEmpresas = v => ({type: EMPRESA.PESQUISAR, payload: v})

export const dadosDefaultNovaEmpresa = () => ({type: EMPRESA.DEFAULT_REQUESTS})

export const salvarEmpresa = (v) => ({type: EMPRESA.SALVAR_REQUEST, payload: v})


function* pesquisar({payload: v}) {
    console.log('entrei', v)
    try {
        const {data} = yield call(api.get, `/empresas?nome=${v}`)
        yield put({type: EMPRESA.REQUEST_LIST_SUCESSO, payload: data})
    } catch (e) {
        console.log(e)
        yield put({type: EMPRESA.REQUEST_LIST_ERROR, payload: e})
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
    } catch (e) {
        yield put({type: EMPRESA.SALVAR_ERRO, payload: e})
    }
}



function* novaEmpresaSaga() {
    yield all([
        takeEvery(EMPRESA.DEFAULT_REQUESTS, dadosDefaultRequest),
        takeEvery(EMPRESA.SALVAR_REQUEST, saveRequest),
        takeEvery(EMPRESA.PESQUISAR, pesquisar),
    ])
}

export default novaEmpresaSaga