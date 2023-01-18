import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MenuLateral from './componentes/MenuLateral';
import Agenda from './paginas/Agenda'
import PaginaGenerica from './paginas/PaginaGenerica';
import {colunaPessoa, colunaEspecialidade} 
from './data/tabela_info';
import axios from 'axios';
import { BASE_URL } from './config/axios';

function App() {
	const [pessoa, setPessoa] = useState([]);
	const [convenio, setConvenio] = useState([]);
	const [especialidade, setEspecialidade] = useState([]);
	const [procedimento, setProcedimento] = useState([]);

	async function buscar() {
		await axios.get(`${BASE_URL}/pessoas`).then((response) => {
			setPessoa(response.data);
		})
		await axios.get(`${BASE_URL}/convenios`).then((response) => {
			setConvenio(response.data);
		})
		await axios.get(`${BASE_URL}/especialidades`).then((response) => {
			setEspecialidade(response.data);
		})
		await axios.get(`${BASE_URL}/procedimentos`).then((response) => {
			setProcedimento(response.data);
		})
	}

	useEffect(() => {
		buscar(); // eslint-disable-next-line
	}, []);

	return (
		<BrowserRouter>
			<div className="container">
				<MenuLateral />
				<Routes>
					<Route path='/' element={<PaginaGenerica />}/>
					<Route path='/paciente' element={<PaginaGenerica 
					titulo="Paciente" coluna={colunaPessoa} linha={pessoa} />}/>
					<Route path='/dentista' element={<PaginaGenerica 
					titulo="Dentista" coluna={colunaPessoa} linha={pessoa}  />}/>
					<Route path='/recepcionista' element={<PaginaGenerica 
					titulo="Recepcionista" coluna={colunaPessoa} linha={pessoa} />}/>
					<Route path='/procedimento' element={<PaginaGenerica 
					titulo="Procedimento" coluna={colunaEspecialidade} linha={procedimento} />}/>
					<Route path='/especialidade' element={<PaginaGenerica 
					titulo="Especialidade" coluna={colunaEspecialidade} linha={especialidade} />} />
					<Route path='/convenio' element={<PaginaGenerica 
					titulo="Convenio" coluna={colunaPessoa} linha={convenio} />} />
          			<Route path='/agenda' element={<Agenda />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
