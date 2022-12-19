import React from "react";
import { Link } from "react-router-dom";
import "./MenuLateral.css";

const MenuLateral = () => {
	const menuItems = [
		{
			texto: "INICIO",
			icone: "icones/inicio.svg",
			link: "/"
		},
		{
			texto: "PACIENTES",
			icone: "icones/paciente.svg",
			link: "/paciente"
		},
		{
			texto: "DENTISTAS",
			icone: "icones/dentista.svg",
			link: "/dentista"
		},
		{
			texto: "AGENDAS",
			icone: "icones/agenda.svg",
			link: "/"
		},
		{
			texto: "PROCEDIMENTOS",
			icone: "icones/procedimento.svg",
			link: "/"
		},
		{
			texto: "ESPECIALIDADES",
			icone: "icones/especialidade.svg",
			link: "/"
		},
		{
			texto: "CONVÊNIOS",
			icone: "icones/convenio.svg",
			link: "/"
		},
		{
			texto: "RECEPCIONISTA",
			icone: "icones/recepcionista.svg",
			link: "/recepcionista"
		},
		{
			texto: "FINANCEIRO",
			icone: "icones/financeiro.svg",
			link: "/"
		},
		{
			texto: "RELATÓRIOS",
			icone: "icones/relatorio.svg",
			link: "/"
		},
	];
	return (
		<div className="menu-lateral-container">
			<div className="menu-lateral-titulo">
				<img src="icons/Logo.svg" alt="" srcset="" />
				<h1>Clinica</h1>
			</div>
			<div className="menu-lateral-conteudo">
				{menuItems.map(({ texto, icone, link }) => (
					<Link to={link}>
						<div className="menu-item">
							<div className="menu-item-img">
								<img className="menu-item-icone" src={icone} alt="" srcset="" />
							</div>
							<div className="menu-item-texto">
								<p>{texto}</p>
							</div>
						</div>		
					</Link>			
				))}
			</div>
		</div>
	);
};

export default MenuLateral;
