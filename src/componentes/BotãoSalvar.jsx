import React from 'react'
import './BotaoSalvar.css'

const BotãoSalvar = ({setBotaoFalse, infos}) => {
    return (
        <div className='container-botao'>
            <button className='botaoSalvar' type="button" id="botao-excluir" onClick={() => {
                setBotaoFalse(false)
            }} >Excluir</button>
            <button className='botaoSalvar' type="button" id="botao-salvar" onClick={() => {
                setBotaoFalse(false)
            }}>Salvar</button>
        </div>
    )
}

export default BotãoSalvar
