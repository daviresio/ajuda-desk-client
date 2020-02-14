import {all} from 'redux-saga/effects'
import apiDataSaga from "./api-data-saga";
import contatosSaga from "./contatos-saga";
import empresaSaga from "./empresa-saga";
import panelSaga from "./panel-saga";


function* rootSaga() {
    yield all([...panelSaga(), ...apiDataSaga(), ...contatosSaga(), ...empresaSaga()])
}

export default rootSaga