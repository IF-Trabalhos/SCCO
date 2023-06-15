import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const[email, setEmail] = useState("");
  const[senha,setSenha] = useState("");

  const navigate = useNavigate();

  const logar = () =>{
    navigate("/home")
    
  }

  return (
    <div>
      <div className='container'>
        <h3>Login</h3>
        <label htmlFor="inputEmail">Email: *
        <input type="email"
        id='inputEmail'
        value={email}
        className='email'
        name='email'
        required
        onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="senha">Senha: *
        <input type="password" 
        value={senha}
        className='inputSenha'
        name='senha'
        required
        onChange={(e) => setSenha(e.target.value)}/>
        </label>
        <button
          onClick={logar}
          type='button'
          >
              Login
        </button>
      </div>
        
    </div>
  )
}
