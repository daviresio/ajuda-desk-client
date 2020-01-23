import { combineReducers } from "redux"
import apiData from "./api-data";
import control from "./control";

const reducers = combineReducers({
    apiData,
    control,
})

export default reducers