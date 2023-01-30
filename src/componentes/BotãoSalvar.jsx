import React from 'react'
import './BotaoSalvar.css'

const BotãoSalvar = ({setBotaoFalse, salvar, excluir}) => {
    return (
        <div className='container-botao'>
            <button className='botao' type="button" id="botao-excluir" onClick={() => {
                setBotaoFalse != null ?
                 setBotaoFalse(false) :
                excluir(1)
            }} >Excluir</button>
            <button 
            className='botao' 
            type="button" 
            id="botao-salvar" 
            onClick={() => {
                setBotaoFalse != null ?
                setBotaoFalse(false) :
                salvar()
            }}>Salvar</button>
        </div>
    )
}

export default BotãoSalvar
