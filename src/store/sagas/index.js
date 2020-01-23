import {all, takeEvery} from 'redux-saga/effects'
import apiDataSaga, {loadGrupos} from "./api-data-saga";
import controlSaga from "./control-saga";
import {GRUPOS} from "../actions/api-request-actions";


function* rootSaga() {
    yield all([...apiDataSaga()])
}

export default rootSaga