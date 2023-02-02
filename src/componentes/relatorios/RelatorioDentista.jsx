import React from 'react'
import BotãoSalvar from '../BotãoSalvar'

const RelatorioDentista = () => {

    const getIntAleatorio = () => {
        return Math.floor(Math.random() * 100)
    }
    const getFloatAleatorio = () => {
        return (Math.random() * 500.2).toFixed(2)
    }
    const valorTotal = (getFloatAleatorio())
    const valorDescontado = ((valorTotal / 100) * 20).toFixed(2)
    return (
        <div className='conteudo-principal'>
            <div className='cabeçalho-principal'>
                <h1>Relatório</h1>
            </div>
            <div className='container-principal-central'>
                <div className='formatador-relatorio'>
                    <div>
                        <h2 className='titulo-relatorio'>Dentista João da Silva</h2>
                       <div className='informacoes2'>
                        <p>CRO:{getIntAleatorio()}</p>
                        <p>Dt. Nascimento: 14/06/1956</p>
                        <p>De: 19/09/2022 Até 15/10/2022</p>
                        </div>
                    </div>
                    <div className='informacoes-completa'>
                      
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
                                Valor total a ser descontado: {valorDescontado}
                            </div>
                            <div className='informacoes'>
                                Valor a ser pago: {(valorTotal - valorDescontado).toFixed(2)}
                            </div>
               
                    </div>
                    <div className='botoes'>
                            <BotãoSalvar/>
                        </div>
                </div>
            </div>
        </div>
    )

}

export default RelatorioDentista
