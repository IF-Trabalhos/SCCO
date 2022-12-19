import React from "react";
import "./MenuLateral.css";

const MenuLateral = () => {
	const menuItems = [
		{
			texto: "INICIO",
			icone: "icones/inicio.svg",
		},
		{
			texto: "PACIENTES",
			icone: "icones/paciente.svg",
		},
		{
			texto: "DENTISTAS",
			icone: "icones/dentista.svg",
		},
		{
			texto: "AGENDAS",
			icone: "icones/agenda.svg",
		},
		{
			texto: "PROCEDIMENTOS",
			icone: "icones/procedimento.svg",
		},
		{
			texto: "ESPECIALIDADES",
			icone: "icones/especialidade.svg",
		},
		{
			texto: "CONVÊNIOS",
			icone: "icones/convenio.svg",
		},
		{
			texto: "RECEPCIONISTA",
			icone: "icones/recepcionista.svg",
		},
		{
			texto: "FINANCEIRO",
			icone: "icones/financeiro.svg",
		},
		{
			texto: "RELATÓRIOS",
			icone: "icones/relatorio.svg",
		},
	];
	return (
		<div className="menu-lateral-container">
			<div className="menu-lateral-titulo">
				<img src="icons/Logo.svg" alt="" srcset="" />
				<h1>Clinica</h1>
			</div>
			<div className="menu-lateral-conteudo">
				{menuItems.map(({ texto, icone }) => (
					<div className="menu-item">
						<div className="menu-item-img">
							<img className="menu-item-icone" src={icone} alt="" srcset="" />
						</div>
						<div className="menu-item-texto">
							<p>{texto}</p>
						</div>
					</div>					
				))}
			</div>
		</div>
	);
};

export default MenuLateral;
