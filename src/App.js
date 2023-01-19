import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MenuLateral from './componentes/MenuLateral';
import Agenda from './paginas/Agenda'
import PaginaGenerica from './paginas/PaginaGenerica';
import axios from 'axios';
import { BASE_URL } from './config/axios';
import {colunaPessoa, colunaEspecialidade, colunaDespesa,
colunaFaturaConvenio, colunaFaturaPaciente} 
from './data/tabela_info';
import Financeiro from './paginas/Financeiro';

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
					<Route path='/' element={<PaginaGenerica
					titulo={"Home"} coluna={colunaPessoa} linha={pessoa} />}/>
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
					<Route path='/financeiro' element={<Financeiro />} />
					<Route path='/financeiro/paciente' element={<PaginaGenerica 
					titulo="Fatura Paciente" coluna={colunaFaturaPaciente} 
					linha={pessoa}/>} />
					<Route path='/financeiro/convenio' element={<PaginaGenerica 
					titulo="Fatura Convenio" coluna={colunaFaturaConvenio} 
					linha={convenio}/>} />
					<Route path='/financeiro/mensal' element={<PaginaGenerica 
					titulo="Despesa Mensal" coluna={colunaDespesa} 
					linha={pessoa}/>} />
					<Route path='/financeiro/recorrente' element={<PaginaGenerica 
					titulo="Despesa Recorrente" coluna={colunaDespesa} 
					linha={pessoa}/>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
