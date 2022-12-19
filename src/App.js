import React from "react";
import './App.css'

function App() {
	return(
		<div className="container">
			<div className="menu-lateral-container">
				<h1>Menu Lateral</h1>
			</div>
			<div className="conteudo-principal">
				<div className="cabeçalho-principal">
					<h1>Cabeçalho Principal</h1>
				</div>
				<div className="container-principal-central">
					<div className="cabeçalho-central">
						<h1>Cabeçalho Central</h1>
					</div>
					<div className="conteudo-principal-central">
						<h1>Conteúdo Principal</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
