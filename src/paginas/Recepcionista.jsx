import React from "react";
import TelaInicialGenerica from "../componentes/TelaInicialGenerica";

const Recepcionista = () => {
    const colunas =[
        {
            nome: "Nome", classe:"borda-lateral", sort: true
        },
        {
            nome: "E-mail", classe:"borda-lateral", sort: true
        },
        {
            nome: "Telefone", classe:"", sort: true
        },
    ]
    const linhas =[
        {
            nome: "Recepcionista 1", email: "rp1@gmail.com", telefone: "32991608320"  
        },
        {
            nome: "Recepcionista 2", email: "rp2@gmail.com", telefone: "32991608320"  
        },
        {
            nome: "Recepcionista 3", email: "rp3@gmail.com", telefone: "32991608320"  
        },
    ]
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal' >
                <h1>Recepcionista</h1>
            </div>
            <TelaInicialGenerica titulo={'Recepcionista'} colunas={colunas} linhas={linhas} />
        </div>
    )
}

export default Recepcionista