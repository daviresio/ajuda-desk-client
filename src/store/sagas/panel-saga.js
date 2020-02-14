import {all, takeEvery, put} from "redux-saga/effects";
import {PANEL_CADASTRO_EMPRESA} from "../actions/panel-actions";
import {clearEmpresaState} from "../actions/empresa-actions";

function* clearEmpresaData() {
    yield put(clearEmpresaState())
}

function* panelSaga() {
    yield all([
        takeEvery(PANEL_CADASTRO_EMPRESA.HIDDEN, clearEmpresaData),
    ])
}

export default panelSaga