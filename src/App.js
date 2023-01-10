import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MenuLateral from './componentes/MenuLateral';
import Agenda from './paginas/Agenda'
import PaginaGenerica from './paginas/PaginaGenerica';
import {colunaPessoa, colunaEspecialidade, colunaDespesa,
colunaFaturaConvenio, colunaFaturaPaciente} 
from './data/tabela_info';
import Financeiro from './paginas/Financeiro';

function App() {
	const dados = require('./data/db.json')
	return (
		<BrowserRouter>
			<div className="container">
				<MenuLateral />
				<Routes>
					<Route path='/' element={<PaginaGenerica />}/>
					<Route path='/paciente' element={<PaginaGenerica 
					titulo="Paciente" coluna={colunaPessoa} 
					linha={dados.pessoas} />}/>
					<Route path='/dentista' element={<PaginaGenerica 
					titulo="Dentista" coluna={colunaPessoa} 
					linha={dados.pessoas}  />}/>
					<Route path='/recepcionista' element={<PaginaGenerica 
					titulo="Recepcionista" coluna={colunaPessoa} 
					linha={dados.pessoas} />}/>
					<Route path='/procedimento' element={<PaginaGenerica 
					titulo="Procedimento" coluna={colunaEspecialidade} 
					linha={dados.procedimentos} />}/>
					<Route path='/especialidade' element={<PaginaGenerica 
					titulo="Especialidade" coluna={colunaEspecialidade} 
					linha={dados.especialidades} />} />
					<Route path='/convenio' element={<PaginaGenerica 
					titulo="Convenio" coluna={colunaPessoa} 
					linha={dados.convenios} />} />
          			<Route path='/agenda' element={<Agenda />} />
					
					<Route path='/financeiro' element={<Financeiro />} />
					<Route path='/financeiro/paciente' element={<PaginaGenerica 
					titulo="Fatura Paciente" coluna={colunaFaturaPaciente} 
					linha={dados.pessoas}/>} />
					<Route path='/financeiro/convenio' element={<PaginaGenerica 
					titulo="Fatura Convenio" coluna={colunaFaturaConvenio} 
					linha={dados.convenios}/>} />
					<Route path='/financeiro/mensal' element={<PaginaGenerica 
					titulo="Despesa Mensal" coluna={colunaDespesa} 
					linha={dados.pessoas}/>} />
					<Route path='/financeiro/recorrente' element={<PaginaGenerica 
					titulo="Despesa Recorrente" coluna={colunaDespesa} 
					linha={dados.pessoas}/>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
