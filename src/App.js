import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Rotas } from './Rotas';


function App() {
	
	return (
		<div>
		<BrowserRouter>
			<Rotas/>
		</BrowserRouter>
		</div>
	);
}

export default App;