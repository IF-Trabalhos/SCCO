import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MenuLateral from './componentes/MenuLateral';
import Agenda from './paginas/Agenda'
import Cadastro from './paginas/Cadastro';
import PaginaGenerica from './paginas/PaginaGenerica';

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<MenuLateral />
				<Routes>
					<Route path='/' element={<PaginaGenerica />}/>
					<Route path='/paciente' element={<PaginaGenerica titulo="Paciente" />}/>
					<Route path='/paciente/cadastro' element={<Cadastro titulo="Paciente" />} />
					
					<Route path='/dentista' element={<PaginaGenerica titulo="Dentista" />}/>
					<Route path='/recepcionista' element={<PaginaGenerica titulo="Recepcionista" />}/>
					<Route path='/procedimento' element={<PaginaGenerica titulo="Procedimento" />}/>
					<Route path='/especialidade' element={<PaginaGenerica titulo="Especialidade" />} />
					<Route path='/convenio' element={<PaginaGenerica titulo="Convenio" />} />
          			<Route path='/agenda' element={<Agenda />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
