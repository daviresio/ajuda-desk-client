import {GRUPOS} from "../actions/api-request-actions";

const INITIAL_STATE = {
    grupos: [],
    error: null,
}

const apiData = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GRUPOS.LOADED_SUCCESS:
            return {...state, grupos: action.payload}
        case GRUPOS.LOADED_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}

export default apiData