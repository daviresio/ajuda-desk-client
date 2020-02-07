export const NOVO_CONTATO = {
    VISIBLE: 'OPEN_MODAL_NOVO_CONTATO',
    HIDDEN: 'CLOSE_MODAL_NOVO_CONTATO',
}

export const NOVA_EMPRESA = {
    VISIBLE: 'OPEN_MODAL_NOVA_EMPRESA',
    HIDDEN: 'CLOSE_MODAL_NOVA_EMPRESA',
}

export const exibirPanelNovoContato = () => ({type: NOVO_CONTATO.VISIBLE})

export const esconderPanelNovoContato = () => ({type: NOVO_CONTATO.HIDDEN})

export const exibirPanelNovaEmpresa = () => ({type: NOVA_EMPRESA.VISIBLE})

export const esconderPanelNovaEmpresa = () => ({type: NOVA_EMPRESA.HIDDEN})