import React from "react";
import { Link } from "react-router-dom";
import './Financeiro.css'

const Financeiro= () => {
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal'>
                <h1>Financeiro</h1>
            </div>
            <div className='corpo-financas'>
                <Link className="caixa-financas" id="caixa-paciente" 
                to={"paciente"}>
                    Paciente
                </Link>
                <Link className="caixa-financas" id="caixa-convenio" 
                to={"convenio"}>
                    Convênio</Link>
                <Link className="caixa-financas" id="caixa-mensal" 
                to={"mensal"}>
                    Despesas Mensais</Link>
                <Link className="caixa-financas" id="caixa-recorrente" 
                to={"recorrente"}>
                    Despesas Recorrentes</Link>
            </div>
        </div>
    )
}

export default Financeiro