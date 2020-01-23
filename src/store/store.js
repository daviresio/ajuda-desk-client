import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, createStore, compose} from "redux"
import reducers from "./reducers/root-reducer"
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
    sagaMiddleware,
];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        reducers, composeEnhancers(applyMiddleware(...middlewares))
    )

    sagaMiddleware.run(rootSaga)

    return store
}

export default configureStore()

