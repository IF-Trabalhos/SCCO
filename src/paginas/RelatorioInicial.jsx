import React from 'react'
import { Link } from "react-router-dom";
import './RelatorioInicial.css';
const RelatorioInicial = () => {
    return (
        <div className="conteudo-principal">
            <div className='cabeçalho-principal'>
                <h1>Relatórios</h1>
            </div>
            <div className='corpo-relatorio'>
                <Link className="caixa-relatorio" id="caixa-paciente"
                    to={"clinica"}>
                    Clinica
                </Link>
                <Link className="caixa-relatorio" id="caixa-convenio"
                    to={"paciente"}>
                    Paciente</Link>
                <Link className="caixa-relatorio" id="caixa-mensal"
                    to={"dentista"}>
                    Dentista</Link>
                    <Link className="caixa-relatorio" id="caixa-recorrente"
                    to={"convenio"}>
                    Convênio</Link>
            </div>
        </div>
    )
}

export default RelatorioInicial
