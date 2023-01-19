import React from "react";
import BarraDePesquisa from "./BarraDePesquisa";
import Tabela from "./Tabela";
import AddBotão from "./AddBotão";
import { Link } from "react-router-dom";

const TelaInicialGenerica = ({titulo, colunas , linhas}) => {

    const generica = ["Paciente", "Dentista", "Recepcionista", "Convenio"];
    const especialista = ["Especialidade", "Procedimento"];
    let pessoa = ""
    generica.includes(titulo) ? pessoa = "Generica" 
    : especialista.includes(titulo) ? pessoa = "Especialista"
    : pessoa = titulo

    return(
        <div className='container-principal-central'>
            <div className='cabeçalho-central'>
                <BarraDePesquisa />
                <Link className="add-botão" to={"cadastro"}>
                    Adicionar {titulo}
                </Link>
            </div>
            <div className='conteudo-principal-central'>
                <Tabela pessoa={pessoa} colunas={colunas} linhas={linhas} />
            </div>
        </div>
    )
}

export default TelaInicialGenerica