import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MenuLateral from './componentes/MenuLateral';
import Paciente from './paginas/Paciente';
import Dentista from './paginas/Dentista'
import Recepcionista from './paginas/Recepcionista'

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<MenuLateral />
				<Routes>
					<Route path='/paciente' element={<Paciente />}/>
					<Route path='/dentista' element={<Dentista />}/>
					<Route path='/recepcionista' element={<Recepcionista />}/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
