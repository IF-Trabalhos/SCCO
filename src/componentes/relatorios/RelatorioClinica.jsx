import React from 'react'
import {useState} from 'react'
import BotãoSalvar from '../BotãoSalvar'
import './Relatorios.css'
const RelatorioClinica = () => {
    const getIntAleatorio = () => {
        return Math.floor(Math.random() * 100)
    }
    const getFloatAleatorio = () => {
        return (Math.random() * 500.2).toFixed(2)
    }
    const valorTotal = (getFloatAleatorio())
    const valorDescontado = ((valorTotal / 100) * 20).toFixed(2)
    const [nomeRelatorio, setNomeRelatorio] = useState("")

    return (
        <div className='conteudo-principal'>
            <div className='cabeçalho-principal'>
                <h1>Relatório</h1>
            </div>
            <div className='container-principal-central'>
                <div className='formatador-relatorio'>
                    <div>
                        <label htmlFor="inputNomeRelatorio">
                            Nome Relatório:
                            <input type="text" required 
                            onChange={(e) => setNomeRelatorio(e.target.value)} name='inputNome Relatorio' />
                        </label>
                        <h3 className='periodo-relatorio'>De: 09/04/2021 Até: 13/07/2022</h3>

                    </div>
                    <div className='informacoes-completa'>
                        <div className='informacoes'>
                            Consultas realizadas: {getIntAleatorio()}
                        </div>
                        <div className='informacoes'>
                            Procedimentos realizados: {getIntAleatorio()}
                        </div>
                        <div className='informacoes'>
                            Pacientes atendidos: {getIntAleatorio()}
                        </div>
                        <div className='informacoes'>
                            Valor total: {valorTotal}
                        </div>
                        <div className='informacoes'>
                            Valor a ser descontado: {valorDescontado}
                        </div>
                        <div className='informacoes'>
                            Lucro Total: {getFloatAleatorio()}
                        </div>
                        <div className='botoes'>
                            <BotãoSalvar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatorioClinica
