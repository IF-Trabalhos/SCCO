import React from "react";
import TelaInicialGenerica from "../componentes/TelaInicialGenerica";

const Paciente = () => {
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal' >
                <h1>Paciente</h1>
            </div>
            <TelaInicialGenerica titulo={'Paciente'} />
        </div>
    )
}

export default Paciente