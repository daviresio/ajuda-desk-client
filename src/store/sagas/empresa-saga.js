import {all, call, put, takeEvery} from "redux-saga/effects";
import api from "../../config/network";
import {EMPRESA, listarEmpresas, SCORE} from "../actions/empresa-actions";
import { toast } from "react-toastify";
import {closeModalExcluirEmpresa, closePanelCadastroEmpresa} from "../actions/panel-actions";
import { push } from 'connected-react-router'


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


function* salvar({payload: v}) {
    try {
        const {data} = yield call(api.post, '/empresas', v)
        yield put({type: EMPRESA.SALVAR_SUCESSO, payload: data})
        toast.success('🚀 Empresa criada!')
        yield put(closePanelCadastroEmpresa())
        yield put(push(`/empresas/${data.id}`))
    } catch (e) {
        yield put({type: EMPRESA.SALVAR_ERRO, payload: e})
        toast.error('😫 Ocorreu um erro no servidor')
    }
}


function* editar({payload: v}) {
    try {
        const {data} = yield call(api.put, '/empresas', v)
        yield put({type: EMPRESA.EDITAR_SUCESSO, payload: data})
        toast.success('🚀 Empresa atualizada!')
        yield put(closePanelCadastroEmpresa())
        yield put(push(`/empresas/${data.id}`))
    } catch (e) {
        yield put({type: EMPRESA.EDITAR_ERRO, payload: e})
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


function* listar() {
    try {
        const {data} = yield call(api.get, `/empresas`)
        yield put({type: EMPRESA.LIST_SUCESSO, payload: data})
    } catch (e) {
        yield put({type: EMPRESA.LIST_ERRO, payload: e.response})
        console.log(e)
        toast.error('😫 Nao foi possivel listar as empresas!')
    }
}

function* excluir({payload: v}) {
    try {
        const {data} = yield call(api.delete, `/empresas/${v}`)
        yield put({type: EMPRESA.EXCLUIR_SUCESSO, payload: data})
        yield put(closeModalExcluirEmpresa())
        toast.success('🚀 Empresa excluida!')
        yield put(listarEmpresas())
    } catch (e) {
        yield put({type: EMPRESA.EXCLUIR_ERRO, payload: e.response})
        console.log(e)
        toast.error('😫 Nao foi possivel excluir esta empresa!')
    }
}



function* empresaSaga() {
    yield all([
        takeEvery(EMPRESA.DEFAULT_REQUESTS, dadosDefaultRequest),
        takeEvery(EMPRESA.SALVAR_REQUEST, salvar),
        takeEvery(EMPRESA.EDITAR, editar),
        takeEvery(EMPRESA.PESQUISAR, pesquisar),
        takeEvery(EMPRESA.BUSCAR, buscar),
        takeEvery(EMPRESA.LISTAR, listar),
        takeEvery(EMPRESA.EXCLUIR, excluir),
    ])
}

export default empresaSaga