import {all, call, put, takeEvery} from "redux-saga/effects";
import api from "../../config/network";
import {buscarEmpresa} from "../actions/empresa-actions";
import { toast } from "react-toastify";
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


function* anotacaoSaga() {
    yield all([
        takeEvery(ANOTACAO.SALVAR_REQUEST, salvar),
        // takeEvery(EMPRESA.EDITAR, editar),
        // takeEvery(EMPRESA.LISTAR, listar),
        // takeEvery(EMPRESA.EXCLUIR, excluir),
    ])
}

export default anotacaoSaga