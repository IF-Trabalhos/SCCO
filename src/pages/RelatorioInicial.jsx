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
                <div class="corporelatorio">
                    <div id="caixa-clinica" className='caixarelatoriocss' >
                        <Link className="caixa-relatorio" to={"clinica"}>
                            <img src="icones/inicio.svg" class="imgrelatorio" />
                            <span>Clinica</span>
                        </Link>
                    </div>
                    <div id="caixa-paciente" className='caixarelatoriocss'>
                        <Link className="caixa-relatorio" to={"paciente"}>
                            <img src="icones/paciente.svg" class="imgrelatorio" />
                            <span>Paciente</span>
                        </Link>
                    </div>
                    <div id="caixa-dentista" className='caixarelatoriocss'>
                        <Link className="caixa-relatorio" to={"dentista"}>
                            <img src="icones/dentista.svg" class="imgrelatorio" />
                            <span>Dentista</span>
                        </Link>
                    </div>
                    <div id="caixa-convenio" className='caixarelatoriocss'>
                        <Link className="caixa-relatorio" to={"convenio"}>
                        <div class="caixa-imagem">
                            <img src="icones/convenio.svg" class="imgrelatorio" />
                            </div>
                            <span>Convênio</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatorioInicial
