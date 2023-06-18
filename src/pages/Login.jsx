import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

export const Login = () => {
  const[email, setEmail] = useState("");
  const[senha,setSenha] = useState("");

  const navigate = useNavigate();

  const logar = () =>{
    navigate("/home")
    
  }

  return (
    <div class="container-login">
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input 
            type="text" 
            name="email" 
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input 
            type="password" 
            name="senha" 
            required
            onChange={(e) => setSenha(e.target.value)}
            />
          <label>Senha</label>
        </div>
        <div class="button-container">
          <button onClick={logar} type="submit">Entrar</button>
        </div>
      </form>
    </div>
  </div> 
  )
}
