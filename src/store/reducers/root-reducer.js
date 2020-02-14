import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import apiData from "./api-data";
import control from "./control";
import panel from "./panel";
import {history} from "../../config/storeRoutes";

const reducers = combineReducers({
    apiData,
    control,
    panel,
    router: connectRouter(history)
})

export default reducers