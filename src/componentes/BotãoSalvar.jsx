import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BotaoSalvar.css'

const BotãoSalvar = ({setBotaoFalse, pagina}) => {

    const navigate = useNavigate()

    const navegar = () => {
        navigate(`${pagina}`)
    }

    return (
        <div className='container-botao'>
            <button className='botao' type="button" id="botao-excluir" onClick={() => {
                setBotaoFalse != null ?
                setBotaoFalse(false) :
                navegar()
            }} >Excluir</button>
            <button 
            className='botao' 
            type="button" 
            id="botao-salvar" 
            onClick={() => {
                setBotaoFalse != null ?
                setBotaoFalse(false) :
                navegar()
            }}>Salvar</button>
        </div>
    )
}

export default BotãoSalvar
