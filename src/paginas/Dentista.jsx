import React from "react";
import TelaInicialGenerica from "../componentes/TelaInicialGenerica";

const Dentista = () => {
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
            nome: "Dentista Sobrenome 1", email: "d1@gmail.com", telefone: "32991608320"  
        },
        {
            nome: "Dentista Sobrenome 2", email: "d2@gmail.com", telefone: "32991608320"  
        },
        {
            nome: "Dentista Sobrenome 3", email: "d3@gmail.com", telefone: "32991608320"  
        },
    ]
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal' >
                <h1>Dentista</h1>
            </div>
            <TelaInicialGenerica titulo={'Dentista'} colunas={colunas} linhas={linhas} />
        </div>
    )
}

export default Dentista