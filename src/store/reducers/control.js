import {ANOTACAO_PAGE} from "../actions/anotacao-actions";

const INITIAL_STATE = {
    anotacaoForm: {
        visible: false,
        value: {
            titulo: '',
            conteudo: '',
        }
    }
}

const control = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ANOTACAO_PAGE.FORM_VISIBLE:
            return {...state, anotacaoForm: {...state.anotacaoForm, visible: true}}
        case ANOTACAO_PAGE.FORM_HIDDEN:
            return {...state, anotacaoForm: INITIAL_STATE.anotacaoForm}
        case ANOTACAO_PAGE.CHANGE_FORM_VALUE:
            return {...state, anotacaoForm: {...state.anotacaoForm, value: action.payload}}
        default:
            return state
    }
}

export default control
