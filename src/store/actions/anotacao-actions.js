
export const ANOTACAO = {
    SALVAR_REQUEST: 'ANOTACAO_SALVAR',
    SALVAR_SUCESSO: 'ANOTACAO_SALVAR_SUCESSO',
    SALVAR_ERRO: 'ANOTACAO_SALVAR_ERRO',
    LISTAR_REQUEST: 'ANOTACAO_LISTAR',
    LISTAR_SUCESSO: 'ANOTACAO_LISTAR_SUCESSO',
    LISTAR_ERRO: 'ANOTACAO_LISTAR_ERRO',
}

export const ANOTACAO_PAGE = {
    FORM_VISIBLE: 'ANOTACAO_PAGE_FORM_VISIBLE',
    FORM_HIDDEN: 'ANOTACAO_PAGE_FORM_HIDDEN',
    CHANGE_FORM_VALUE: 'CHANGE_FORM_VALUE',
}

export const salvarAnotacao = (v) => ({type: ANOTACAO.SALVAR_REQUEST, payload: v})
export const salvarAnotacaoSucesso = (v) => ({type: ANOTACAO.SALVAR_SUCESSO, payload: v})
export const salvarAnotacaoErro = (v) => ({type: ANOTACAO.SALVAR_ERRO, payload: v})

export const listarAnotacao = (v) => ({type: ANOTACAO.LISTAR_REQUEST, payload: v})
export const listarAnotacaoSucesso = (v) => ({type: ANOTACAO.LISTAR_SUCESSO, payload: v})
export const listarAnotacaoErro = (v) => ({type: ANOTACAO.LISTAR_ERRO, payload: v})

export const exibirFormAnotacao = () => ({type: ANOTACAO_PAGE.FORM_VISIBLE})
export const esconderFormAnotacao = () => ({type: ANOTACAO_PAGE.FORM_HIDDEN})

export const changeFormValueAnotacao = (v) => ({type: ANOTACAO_PAGE.CHANGE_FORM_VALUE, payload: v})