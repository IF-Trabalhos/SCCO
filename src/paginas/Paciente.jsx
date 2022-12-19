import React from "react";
import TelaInicialGenerica from "../componentes/TelaInicialGenerica";

const Paciente = () => {
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
            nome: "Paciente Sobrenome 1", email: "p1@gmail.com", telefone: "32991608320"  
        },
        {
            nome: "Paciente Sobrenome 2", email: "p2@gmail.com", telefone: "32991608320"  
        },
        {
            nome: "Paciente Sobrenome 3", email: "p3@gmail.com", telefone: "32991608320"  
        },
    ]
    return(
        <div className="conteudo-principal">
            <div className='cabeçalho-principal' >
                <h1>Paciente</h1>
            </div>
            <TelaInicialGenerica titulo={'Paciente'} colunas={colunas} linhas={linhas} />
        </div>
    )
}

export default Paciente