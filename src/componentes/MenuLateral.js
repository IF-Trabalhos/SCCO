import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuLateral.css";

const MenuLateral = () => {
	const navigate = useNavigate();

	function navegar(link) {
		navigate(`${link}`)
	}

	const menuItems = [
		{
			id: "1",
			texto: "INICIO",
			icone: "icones/inicio.svg",
			link: "/home"
		},
		{
			id: "2",
			texto: "PACIENTES",
			icone: "icones/paciente.svg",
			link: "/paciente"
		},
		{
			id: "3",
			texto: "DENTISTAS",
			icone: "icones/dentista.svg",
			link: "/dentista"
		},
		{
			id: "4",
			texto: "AGENDAS",
			icone: "icones/agenda.svg",
			link: "/agenda"
		},
		{
			id: "5",
			texto: "PROCEDIMENTOS",
			icone: "icones/procedimento.svg",
			link: "/procedimento"
		},
		{
			id: "6",
			texto: "ESPECIALIDADES",
			icone: "icones/especialidade.svg",
			link: "/especialidade"
		},
		{
			id: "7",
			texto: "CONVÊNIOS",
			icone: "icones/convenio.svg",
			link: "/convenio"
		},
		{
			id: "8",
			texto: "SECRETÁRIA",
			icone: "icones/recepcionista.svg",
			link: "/recepcionista"
		},
		{
			id: "9",
			texto: "FINANCEIRO",
			icone: "icones/financeiro.svg",
			link: "/financeiro"
		},
		{
			id: "10",
			texto: "RELATÓRIOS",
			icone: "icones/relatorio.svg",
			link: "/relatorio"
		},
	];
	return (
		<div className="menu-lateral-container">
			<div className="menu-lateral-titulo">
				<h1>Clinica</h1>
			</div>
			<div className="menu-lateral-conteudo">
				{menuItems.map(({id, texto, icone, link }) => (
					<div onClick={() => navegar(link)} key={id} className="menu-item">
						<div className="menu-item-img">
							<img className="menu-item-icone" src={icone} alt="" srcSet="" />
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
