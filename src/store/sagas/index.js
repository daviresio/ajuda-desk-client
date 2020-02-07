import {all} from 'redux-saga/effects'
import apiDataSaga from "./api-data-saga";
import contatosSaga from "./contatos-saga";
import empresaSaga from "./empresa-saga";


function* rootSaga() {
    yield all([...apiDataSaga(), ...contatosSaga(), ...empresaSaga()])
}

export default rootSaga