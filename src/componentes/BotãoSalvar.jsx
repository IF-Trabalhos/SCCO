import React from 'react'
import './BotaoSalvar.css'

const BotãoSalvar = ({setBotaoFalse, infos}) => {
    return (
        <div className='container-botao'>
            <button className='botao' type="button" id="botao-excluir" onClick={() => {
                setBotaoFalse(false)
            }} >Excluir</button>
            <button className='botao' type="button" id="botao-salvar" onClick={() => {
                setBotaoFalse(false)
            }}>Salvar</button>
        </div>
    )
}

export default BotãoSalvar
