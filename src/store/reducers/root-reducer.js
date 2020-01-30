import { combineReducers } from "redux"
import apiData from "./api-data";
import control from "./control";
import panel from "./panel";

const reducers = combineReducers({
    apiData,
    control,
    panel,
})

export default reducers