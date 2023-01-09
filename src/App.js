import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MenuLateral from './componentes/MenuLateral';
import Agenda from './paginas/Agenda'
import PaginaGenerica from './paginas/PaginaGenerica';
import {colunaPessoa, colunaEspecialidade, linhaPaciente, linhaDentista,
linhaConvenio, linhaRecepcionista, linhaProcedimento, linhaEspecialidade} 
from './data/tabela_info';

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<MenuLateral />
				<Routes>
					<Route path='/' element={<PaginaGenerica />}/>
					<Route path='/paciente' element={<PaginaGenerica 
					titulo="Paciente" coluna={colunaPessoa} linha={linhaPaciente} />}/>
					<Route path='/dentista' element={<PaginaGenerica 
					titulo="Dentista" coluna={colunaPessoa} linha={linhaDentista}  />}/>
					<Route path='/recepcionista' element={<PaginaGenerica 
					titulo="Recepcionista" coluna={colunaPessoa} linha={linhaRecepcionista}  />}/>
					<Route path='/procedimento' element={<PaginaGenerica 
					titulo="Procedimento" coluna={colunaEspecialidade} linha={linhaProcedimento} />}/>
					<Route path='/especialidade' element={<PaginaGenerica 
					titulo="Especialidade" coluna={colunaEspecialidade} linha={linhaEspecialidade} />} />
					<Route path='/convenio' element={<PaginaGenerica 
					titulo="Convenio" coluna={colunaPessoa} linha={linhaConvenio} />} />
          			<Route path='/agenda' element={<Agenda />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
