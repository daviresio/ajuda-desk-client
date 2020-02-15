import {all, call, put, takeEvery} from "redux-saga/effects";
import api from "../../config/network";
import {buscarEmpresa, EMPRESA, listarEmpresas, SCORE} from "../actions/empresa-actions";
import { toast } from "react-toastify";
import {closeModalExcluirEmpresa, closePanelCadastroEmpresa} from "../actions/panel-actions";
import { push } from 'connected-react-router'
import {ANOTACAO, esconderFormAnotacao} from "../actions/anotacao-actions";


function* salvar({payload: v}) {
    try {
        const {data} = yield call(api.post, '/anotacoes', v)
        yield put({type: ANOTACAO.SALVAR_SUCESSO, payload: data})
        toast.success('🚀 Anotacao criada!')
        yield put(buscarEmpresa(v.empresa_id))
        yield put(esconderFormAnotacao())
    } catch (e) {
        yield put({type: ANOTACAO.SALVAR_ERRO, payload: e})
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



function* anotacaoSaga() {
    yield all([
        takeEvery(ANOTACAO.SALVAR_REQUEST, salvar),
        // takeEvery(EMPRESA.EDITAR, editar),
        // takeEvery(EMPRESA.LISTAR, listar),
        // takeEvery(EMPRESA.EXCLUIR, excluir),
    ])
}

export default anotacaoSaga