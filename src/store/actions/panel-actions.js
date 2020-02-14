export const NOVO_CONTATO = {
    VISIBLE: 'OPEN_MODAL_NOVO_CONTATO',
    HIDDEN: 'CLOSE_MODAL_NOVO_CONTATO',
}

export const PANEL_CADASTRO_EMPRESA = {
    VISIBLE: 'OPEN_PANEL_CADASTRO_EMPRESA',
    HIDDEN: 'CLOSE_PANEL_CADASTRO_EMPRESA',
}

export const MODAL_EXCLUIR_EMPRESA = {
    VISIBLE: 'OPEN_MODAL_EXCLUIR_EMPRESA',
    HIDDEN: 'CLOSE_MODAL_EXCLUIR_EMPRESA',
}

export const exibirPanelNovoContato = () => ({type: NOVO_CONTATO.VISIBLE})

export const esconderPanelNovoContato = () => ({type: NOVO_CONTATO.HIDDEN})

export const openPanelCadastroEmpresa = (v = null) => ({type: PANEL_CADASTRO_EMPRESA.VISIBLE, payload: v})

export const closePanelCadastroEmpresa = () => ({type: PANEL_CADASTRO_EMPRESA.HIDDEN})

export const openModalExcluirEmpresa = (v) => ({type: MODAL_EXCLUIR_EMPRESA.VISIBLE, payload: v})

export const closeModalExcluirEmpresa = () => ({type: MODAL_EXCLUIR_EMPRESA.HIDDEN})