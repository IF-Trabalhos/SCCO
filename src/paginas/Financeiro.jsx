import React, {useState} from "react";
import './Financeiro.css'

const Financeiro= () => {
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal'>
                <h1>Financeiro</h1>
            </div>
            <div className='corpo-financas'>
                <div className="caixa-financas" id="caixa-paciente">
                    Paciente</div>
                <div className="caixa-financas" id="caixa-convenio">
                    Convênio</div>
                <div className="caixa-financas" id="caixa-mensal">
                    Despesas Mensais</div>
                <div className="caixa-financas" id="caixa-recorrente">
                    Despesas Recorrentes</div>
            </div>
        </div>
    )
}

export default Financeiro