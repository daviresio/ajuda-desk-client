
export const CONTATO = {
    DEFAULT_REQUESTS: 'CONTATO_DEFAULT_REQUESTS',
    SALVAR_REQUEST: 'CONTATO_SALVAR',
    SALVAR_SUCESSO: 'CONTATO_SALVAR_SUCESSO',
    SALVAR_ERRO: 'CONTATO_SALVAR_ERRO',
}

export const dadosDefaultContato = () => ({type: CONTATO.DEFAULT_REQUESTS})

export const salvarContato = (v) => ({type: CONTATO.SALVAR_REQUEST, payload: v})
