import {all} from 'redux-saga/effects'
import apiDataSaga from "./api-data-saga";
import contatosSaga from "../actions/api-data/contatos-saga";
import novaEmpresaSaga from "../actions/api-data/empresa-saga";


function* rootSaga() {
    yield all([...apiDataSaga(), ...contatosSaga(), ...novaEmpresaSaga()])
}

export default rootSaga