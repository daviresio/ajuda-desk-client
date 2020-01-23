import {take, takeEvery, put, call, all} from 'redux-saga/effects'
import {GRUPOS} from "../actions/api-request-actions";
import api from '../../config/network'

function* loadGrupos() {
    try {
    const {data} = yield call(api.get, '/grupos')
        yield put({type: GRUPOS.LOADED_SUCCESS, payload: data})
    } catch (e) {
        yield put({type: GRUPOS.LOADED_ERROR, payload: e})
    }
}

export const listGrupos = () => ({type: GRUPOS.INIT})


function* apiDataSaga() {
    yield all([
        takeEvery(GRUPOS.INIT, loadGrupos)
    ])
}

export default apiDataSaga