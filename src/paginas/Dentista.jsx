import React from "react";
import TelaInicialGenerica from "../componentes/TelaInicialGenerica";

const Dentista = () => {
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal' >
                <h1>Dentista</h1>
            </div>
            <TelaInicialGenerica titulo={'Dentista'} />
        </div>
    )
}

export default Dentista