import React from 'react'
import { Link } from "react-router-dom";
import './RelatorioInicial.css';
import MenuLateral from '../componentes/MenuLateral';
const RelatorioInicial = () => {
    return (
        <div className="container">
            <MenuLateral />
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
        </div>
    )
}

export default RelatorioInicial
