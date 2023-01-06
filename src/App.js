import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MenuLateral from './componentes/MenuLateral';
import Paciente from './paginas/Paciente';
import Dentista from './paginas/Dentista'
import Recepcionista from './paginas/Recepcionista'
import Procedimento from './paginas/Procedimento'
import Especialidade from './paginas/Especialidade'
import Convenio from './paginas/Convenio'
import Inicio from './paginas/Inicio'
import Agenda from './paginas/Agenda'

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<MenuLateral />
				<Routes>
					<Route path='/' element={<Inicio />}/>
					<Route path='/paciente' element={<Paciente />}/>
					<Route path='/dentista' element={<Dentista />}/>
					<Route path='/recepcionista' element={<Recepcionista />}/>
					<Route path='/procedimento' element={<Procedimento />}/>
					<Route path='/especialidade' element={<Especialidade />} />
					<Route path='/convenio' element={<Convenio />} />
					<Route path='/agenda' element={<Agenda />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
