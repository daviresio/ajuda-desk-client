export const EMPRESA = {
    DEFAULT_REQUESTS: 'NOVA_EMPRESA_DEFAULT_REQUESTS_INIT',
    PESQUISAR: 'EMPRESA_PESQUISAR',
    SALVAR_REQUEST: 'SALVAR_EMPRESA_REQUEST',
    SALVAR_SUCESSO: 'SALVAR_EMPRESA_SUCESSO',
    SALVAR_ERRO: 'SALVAR_EMPRESA_ERRO',
    BUSCAR: 'BUSCAR_EMPRESA',
    BUSCAR_SUCESSO: 'BUSCAR_EMPRESA_SUCESSO',
    BUSCAR_ERRO: 'BUSCAR_EMPRESA_ERRO',
    LISTAR: 'EMPRESA_LISTAR',
    LIST_SUCESSO: 'EMPRESA_LIST_SUCESSO',
    LIST_ERRO: 'EMPRESA_LIST_ERRO',
    EXCLUIR: 'EMPRESA_EXCLUIR',
    EXCLUIR_SUCESSO: 'EMPRESA_EXCLUIR_SUCESSO',
    EXCLUIR_ERRO: 'EMPRESA_EXCLUIR_ERRO',
    EDITAR: 'EMPRESA_EDITAR',
    EDITAR_SUCESSO: 'EMPRESA_EDITAR_SUCESSO',
    EDITAR_ERRO: 'EMPRESA_EDITAR_ERRO',
    CLEAR: 'CLEAR_EMPRESA'
}

export const SCORE = {
    REQUEST_LIST_SUCESSO: 'SCORE_LIST_SUCCESS',
    REQUEST_LIST_ERROR: 'SCORE_LIST_ERROR',
}

export const pesquisarEmpresas = (v) => ({type: EMPRESA.PESQUISAR, payload: v})

export const listarEmpresas = () => ({type: EMPRESA.LISTAR})

export const dadosDefaultNovaEmpresa = () => ({type: EMPRESA.DEFAULT_REQUESTS})

export const salvarEmpresa = (v) => ({type: EMPRESA.SALVAR_REQUEST, payload: v})

export const buscarEmpresa = (v) => ({type: EMPRESA.BUSCAR, payload: v})

export const editarEmpresa = (v) => ({type: EMPRESA.EDITAR, payload: v})

export const excluirEmpresa = (v) => ({type: EMPRESA.EXCLUIR, payload: v})

export const clearEmpresaState = (v) => ({type: EMPRESA.CLEAR})